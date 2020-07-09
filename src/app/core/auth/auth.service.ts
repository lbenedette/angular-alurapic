import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(username: string, password: string) {
    return this.http
      .post(
        'http://localhost:3000/user/login',
        { userName: username, password },
        { observe: 'response' }
      )
      .pipe(tap(response => {
        const authToken = response.headers.get('x-access-token');
        this.userService.setToken(authToken);
      }));
  }
}
