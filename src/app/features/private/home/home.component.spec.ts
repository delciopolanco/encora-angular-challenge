import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { PostService } from './services/post.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockPostService: PostService;

  beforeEach(waitForAsync(() => {
    mockPostService = {
      getPosts: jest.fn().mockReturnValue([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ]),
    } as unknown as PostService;

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: PostService, useValue: mockPostService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch posts on initialization', async () => {
    await component.ngOnInit();
    fixture.detectChanges();

    expect(component.postList.length).toEqual(2);
  });
});
