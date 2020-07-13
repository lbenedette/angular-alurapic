import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
