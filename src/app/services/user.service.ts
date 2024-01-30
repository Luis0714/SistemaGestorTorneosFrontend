import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.local';
import { Observable } from 'rxjs';
import { ResponseCustom } from '../models/response.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = `${environment.apiUrl}/User`;
  constructor(private http: HttpClient) { }

  register(user: Partial<UserModel>):Observable<ResponseCustom<UserModel>> {
    return this.http.post<ResponseCustom<UserModel>>(`${this.serverUrl}/register`, user);
  }
  getAll(): Observable<ResponseCustom<UserModel[]>> {
    return this.http.get<ResponseCustom<UserModel[]>>(`${this.serverUrl}/getAllUsers`);
  }
}
