import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  // return a observable
  // this.http.get (or any other http verb)
  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`);
  }

  listFromUserPaginate(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());
    
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`, { params });
  }
}