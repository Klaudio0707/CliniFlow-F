export type Role = "adm" | "user";

export interface IUser {
  id?: string; 
  name: string;
  email: string;
  password?: string; 
  role: "user";
}