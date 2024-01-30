export interface ResponseCustom<T>{
  message: string;
  status: number;
  data: T;
}
