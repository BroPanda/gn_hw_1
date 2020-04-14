import { Component } from '@angular/core';
import {UserModel} from '../model/UserModel';
import {HttpClient} from '@angular/common/http';
import {UserService} from './service/user.service';
import {PostModel} from '../model/PostModel';
import {CommentModel} from '../model/CommentModel';
import {PostService} from './service/post.service';
import {CommentService} from './service/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];

  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService) {

    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
      }

}
