import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  title: string;
  content: string;
  createdDate: string | Date;
}

@Injectable()

export class ApiService {
  apiUrl = 'http://localhost:5000/api/';
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  get(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, this.httpOptions)
  }

  post(path: string, body = null): Observable<any> {
      return this.http.post(
          `${this.apiUrl}${path}`,
          JSON.stringify(body),
          {
            headers: this.httpOptions.headers,
            observe: 'response',
          }
      )
  }

  patch(path: string, body = null): Observable<any> {
      return this.http.patch(
          `${this.apiUrl}${path}`,
          JSON.stringify(body),
          {
            headers: this.httpOptions.headers,
            observe: 'response',
          }
      )
  }

  delete(path: string): Observable<any> {
      return this.http.delete(
          `${this.apiUrl}${path}`,
          {
            headers: this.httpOptions.headers,
            observe: 'response',
          }
      )
  }
}
