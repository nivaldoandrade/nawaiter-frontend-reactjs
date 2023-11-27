export enum EnumUserRole {
  admin = 'admin',
  garcom = 'garcom',
  cozinha = 'cozinha',
}

export type UserRoles = keyof typeof EnumUserRole;

export interface User {
  id: string;
  name: string;
  username: string;
  role: UserRoles;
}

export interface UserWithPassword extends User {
  password: string;
}
