export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      order: {
        Row: {
          quantity: number;
          pet_id: number | null;
          created_at: string;
          complete: boolean;
          status: "CREATED" | "PAID" | "DELIVERED";
          id: number;
        };
        Insert: {
          quantity: number;
          pet_id?: number | null;
          created_at?: string;
          complete?: boolean;
          status?: "CREATED" | "PAID" | "DELIVERED";
          id?: number;
        };
        Update: {
          quantity?: number;
          pet_id?: number | null;
          created_at?: string;
          complete?: boolean;
          status?: "CREATED" | "PAID" | "DELIVERED";
          id?: number;
        };
      };
      pet: {
        Row: {
          name: string;
          tags: string[];
          meta: Json | null;
          created_at: string;
          id: number;
        };
        Insert: {
          name: string;
          tags: string[];
          meta?: Json | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          name?: string;
          tags?: string[];
          meta?: Json | null;
          created_at?: string;
          id?: number;
        };
      };
    };
    Functions: {};
  };
}

