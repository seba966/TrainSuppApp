import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_dtos/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, model: any) {
    return this.http.put(this.baseUrl + 'users/update/' + id, model);
  }

  postUserArchive(model: any) {
    return this.http.post(this.baseUrl + 'userarchives/add', model);
  }

  getUserArchives(userId: number) {
    return this.http.get(this.baseUrl + 'userarchives/user/' + userId);
  }
}

