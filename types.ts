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
          id: number;
          created_at: string;
          quantity: number;
          complete: boolean;
          pet_id: number | null;
          status: "CREATED" | "PAID" | "DELIVERED";
        };
        Insert: {
          id?: number;
          created_at?: string;
          quantity: number;
          complete?: boolean;
          pet_id?: number | null;
          status?: "CREATED" | "PAID" | "DELIVERED";
        };
        Update: {
          id?: number;
          created_at?: string;
          quantity?: number;
          complete?: boolean;
          pet_id?: number | null;
          status?: "CREATED" | "PAID" | "DELIVERED";
        };
      };
      pet: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          tags: string[];
          meta: Json | null;
        };
        Insert: {
          id?: number;
          created_at?: string;
          name: string;
          tags: string[];
          meta?: Json | null;
        };
        Update: {
          id?: number;
          created_at?: string;
          name?: string;
          tags?: string[];
          meta?: Json | null;
        };
      };
    };
    Functions: {};
  };
}

