export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
