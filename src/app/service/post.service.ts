import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../model/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpRequest: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.httpRequest.get<PostModel[]>
    (`https://jsonplaceholder.typicode.com/posts`);
  }
}
