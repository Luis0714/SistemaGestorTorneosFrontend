export interface UserModel{
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  rol: string;
}

export interface UserLoginModel{
  email: string;
  password: string;
}
