import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.local';
import { UserLoginModel, UserModel } from '../models/user.model';
import { Observable, tap } from 'rxjs';
import { ResponseCustom } from '../models/response.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  serverUrl = `${environment.apiUrl}/Account`;
  constructor(private http: HttpClient, private storageService : StorageService) { }

  login(credentials: UserLoginModel):Observable<ResponseCustom<string>> {
    return this.http.post<ResponseCustom<string>>(`${this.serverUrl}/login`, credentials)
    .pipe(
      tap((response) =>{
        if(response.status == 200){
          this.storageService.saveToken(response.data);
          this.authenticate().subscribe();
        }
      })
    );
  }
  authenticate():Observable<ResponseCustom<string>> {
    return this.http.get<ResponseCustom<string>>(`${this.serverUrl}/authenticate`);
  }
}
