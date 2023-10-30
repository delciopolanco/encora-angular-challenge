import { Injectable } from '@angular/core';
import { Post } from '../../../../core/models';
import { HttpService } from '../../../../core/services';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public static readonly URL = 'posts';

  constructor(private readonly httpService: HttpService) {}

  public async getPosts(): Promise<Post[]> {
    return this.httpService.GetRequest<Post[]>(PostService.URL);
  }
}
