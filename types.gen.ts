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
        };
        Insert: {
          id?: never;
          name?: string | null;
        };
        Update: {
          id?: never;
          name?: string | null;
        };
      };
    };
    Functions: {};
  };
}

