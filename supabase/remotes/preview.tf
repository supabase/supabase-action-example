variable "git_branch" {
  type    = string
  default = null
}

# Fetch all branches of a linked project
data "supabase_branch" "all" {
  parent_project_ref = var.linked_project
}

# Import an existing branch if exists
import {
  for_each = {
    for b in data.supabase_branch.all.branches :
    b.git_branch => b
    if b.git_branch == var.git_branch
  }
  to = supabase_branch.new[0]
  id = each.value.id
}

# Create a new database for the current git branch
resource "supabase_branch" "new" {
  count              = length(var.git_branch[*])
  parent_project_ref = var.linked_project
  git_branch         = var.git_branch
}

# Override auth settings for the current branch
resource "supabase_settings" "preview" {
  count       = length(var.git_branch[*])
  project_ref = supabase_branch.new[0].database.id

  auth = jsonencode({
    site_url = "http://localhost:3001"
  })
}

output "branch_database" {
  value     = one(supabase_branch.new[*].database)
  sensitive = true
}
