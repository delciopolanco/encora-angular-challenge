import { Component, OnInit } from '@angular/core';
import { Post } from '../../../core/models/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  postList: Post[] = [];

  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.postList = await this.postService.getPosts();
  }
}
