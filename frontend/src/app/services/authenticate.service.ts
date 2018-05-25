import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  {environment}  from '../../environments/environment';
import * as moment from "moment";

@Injectable()
export class AuthenticateService {

  constructor(private http: Http) { }

  private headerOptions = new Headers({'Content-Type': 'application/json'});

  private catchError(error: any): Promise<any>{
    console.error('Error: ', error);
    // return Promise.reject(error.message);
    return error;
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  get isLoggedIn(){
    // const expiration = localStorage.getItem("expires_at");
    // const expiresAt = JSON.parse(expiration);
    // return moment().isBefore( moment(expiresAt) );
    return !!localStorage.getItem("token");
  }

  authenticateUser(user:any): Promise<any> {
    let endpoint = `${environment.BASEAPIURL}/users/authenticate`;
    return this.http
    .post(endpoint, JSON.stringify(user), { headers: this.headerOptions})
    .toPromise()
    .then(res => {
      this.setSession(res.json());
    })
    .catch(this.catchError);

  }

}
