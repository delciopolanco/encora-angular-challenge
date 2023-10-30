import { Injectable } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public static readonly URL = 'posts';

  constructor(private httpService: HttpService) {}

  public async getPosts(): Promise<Post[]> {
    return this.httpService.GetRequest<Post[]>(PostService.URL);
  }
}
