import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpRequest: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.httpRequest.get<UserModel[]>
    (`https://jsonplaceholder.typicode.com/users`);
  }
}
