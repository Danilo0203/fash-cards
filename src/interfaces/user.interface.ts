export interface UserProps {
  user: DataUser[];
}

export interface DataUser {
  id: bigint;
  nombres: string;
  apellidos: string;
  dpi: string;
  email: string;
}
