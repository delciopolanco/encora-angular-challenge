import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly API = environment.api;
  private handleError: boolean = false;

  constructor(private http: HttpClient) {}

  PutRequest = <TResult, TSource>(
    request: string,
    body: TSource,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    return this.filterRequest(
      this.http.put(`${this.API}${request}`, body).toPromise()
    );
  };
  PatchRequest = <TResult, TSource>(
    request: string,
    body: TSource,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    return this.filterRequest(
      this.http.patch(`${this.API}${request}`, body).toPromise()
    );
  };
  UpdateRequest = <TResult, TSource>(
    request: string,
    body: TSource,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    return this.filterRequest(
      this.http.put(`${this.API}${request}`, body).toPromise()
    );
  };
  DeleteRequest = <TResult, TSource>(
    request: string,
    body: TSource,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body,
    };
    return this.filterRequest(
      this.http.delete(`${this.API}${request}`, options).toPromise()
    );
  };
  GetRequest = <TResult>(
    request: string,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    return this.filterRequest(
      this.http.get<TResult>(`${this.API}${request}`).toPromise()
    );
  };
  DownloadRequest = <TResult>(
    request: string,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    return this.filterRequest(this.http.get<TResult>(`${request}`).toPromise());
  };
  PostRequest = <TResult, TSource>(
    request: string,
    body: TSource,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.filterRequest(
      this.http.post(`${this.API}${request}`, body, { headers }).toPromise()
    );
  };
  PostRequestFormData = <TResult, TSource>(
    request: string,
    body: TSource,
    handleError: boolean = true
  ): Promise<TResult> => {
    this.handleError = handleError;
    return this.filterRequest(
      this.http.post(`${this.API}${request}`, body).toPromise()
    );
  };

  private filterRequest = <TResult>(obs: Promise<any>): Promise<TResult> => {
    return obs.catch((errorResponse: HttpErrorResponse): Promise<any> => {
      if (errorResponse.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', errorResponse.error.message);
      } else {
        switch (errorResponse.status) {
          case 0:
            console.log('please check your connection');
            break;
          case 401:
            console.log(
              'The user is not authenticated, httpinterceptor must handle this'
            );
            break;
          case 403:
          case 404:
            console.log('url was not found');
            break;
          case 400:
            let errors: any = '';
            if (errorResponse.error) {
              errors = errorResponse.error;
              errors = errors.message.toString();
            }
            console.log(errors);
            break;
          default:
            console.log(
              `Backend returned code ${errorResponse.status}, ` +
                `body was: ${errorResponse.error}`
            );
            break;
        }
      }
      return Promise.reject(errorResponse);
    });
  };
}
