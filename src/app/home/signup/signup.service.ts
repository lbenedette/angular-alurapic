import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }

  signup(newUser: NewUser) {
    return this.http.post('http://localhost:3000/user/signup', { newUser });
  }
}
