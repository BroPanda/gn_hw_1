import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel} from '../../model/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpRequest: HttpClient) { }

  getComments(): Observable<CommentModel[]> {
    return this.httpRequest.get<CommentModel[]>
    (`https://jsonplaceholder.typicode.com/comments`);
  }
}
