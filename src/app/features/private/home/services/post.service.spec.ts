import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpService } from '../../../../core/services';
import { HttpClientModule } from '@angular/common/http';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
