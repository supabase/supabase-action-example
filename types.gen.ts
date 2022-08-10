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
      employees: {
        Row: {
          id: number;
          name: string | null;
          title: string | null;
        };
        Insert: {
          id?: never;
          name?: string | null;
          title?: string | null;
        };
        Update: {
          id?: never;
          name?: string | null;
          title?: string | null;
        };
      };
    };
    Functions: {};
  };
}

