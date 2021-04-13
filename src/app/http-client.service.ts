import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: null
  };

  private host: string = 'http://localhost:4200/app';


  constructor(private http: HttpClient) {
    this.setAuthorization('my-auth-token');
  }



  public get(): Promise<any[]> {
    return this.http.get(this.host + '/get', this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }



  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }


  public setAuthorization(token: string = ''): void {
    if (!token) {
      return;
    }
    const bearerToken: string = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }


  public register(body: any): Promise<any[]> {
    return this.http.post(this.host + '/post', body, this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  public update(body: any): Promise<any[]> {
    return this.http.put(this.host + '/put', body, this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  public delete(body: any): Promise<any[]> {
    this.httpOptions.body = body;
    return this.http.delete(this.host + '/delete', this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }


}
