import { HttpService } from './http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('HttpService', () => {
  let httpService: HttpService;
  let httpClientSpy: {
    put: jest.Mock;
    patch: jest.Mock;
    delete: jest.Mock;
    get: jest.Mock;
    post: jest.Mock;
  };

  beforeEach(() => {
    httpClientSpy = {
      put: jest.fn(),
      patch: jest.fn(),
      delete: jest.fn(),
      get: jest.fn(),
      post: jest.fn(),
    };
    httpService = new HttpService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(httpService).toBeTruthy();
  });

  it('should call PUT request and handle response', async () => {
    const mockResponse = { data: 'testData' };
    httpClientSpy.put.mockReturnValue(of(mockResponse));

    const result = await httpService.PutRequest('/test', {});

    expect(result).toEqual(mockResponse);
  });

  it('should call PATCH request and handle response', async () => {
    const mockResponse = { data: 'testData' };
    httpClientSpy.patch.mockReturnValue(of(mockResponse));

    const result = await httpService.PatchRequest('/test', {});

    expect(result).toEqual(mockResponse);
  });

  it('should call DELETE request and handle response', async () => {
    const mockResponse = { data: 'testData' };
    httpClientSpy.delete.mockReturnValue(of(mockResponse));

    const result = await httpService.DeleteRequest('/test', {});

    expect(result).toEqual(mockResponse);
  });

  it('should call GET request and handle response', async () => {
    const mockResponse = { data: 'testData' };
    httpClientSpy.get.mockReturnValue(of(mockResponse));

    const result = await httpService.GetRequest('/test');

    expect(result).toEqual(mockResponse);
  });

  it('should call POST request and handle response', async () => {
    const mockResponse = { data: 'testData' };
    httpClientSpy.post.mockReturnValue(of(mockResponse));

    const result = await httpService.PostRequest('/test', {});

    expect(result).toEqual(mockResponse);
  });

  it('should call POST request with form data and handle response', async () => {
    const mockResponse = { data: 'testData' };
    httpClientSpy.post.mockReturnValue(of(mockResponse));

    const result = await httpService.PostRequestFormData('/test', {});

    expect(result).toEqual(mockResponse);
  });
});
