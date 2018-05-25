import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  {environment}  from '../../environments/environment';
import * as JWTDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable()
export class AuthenticateService {

  constructor(private http: Http) { }

  private headerOptions = new Headers({'Content-Type': 'application/json'});

  private catchError(error: any): Promise<any>{
    console.error('Error: ', error);
    return Promise.reject(error.message);
    // return error;
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  private setUserInfo(token){
    localStorage.setItem('user_fullname', token.name);
    localStorage.setItem('user_email', token.email);
    localStorage.setItem('user_id', token.user_id);
  }

  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user_fullname");
    localStorage.removeItem("user_email");
  }

  get isLoggedIn(){
    return !!localStorage.getItem("token");
  }

  public getLoggedUserID(){
    return localStorage.getItem('user_id');
  }

  public getLoggedUserFullName(){
    return localStorage.getItem('user_fullname');
  }

  public getLoggedUserEmail(){
    return localStorage.getItem('user_email');
  }

  private decodeToken(token: string): any {
    try{
      return JWTDecode(token);
    }
    catch(Error){
      return null;
    }
  }

  authenticateUser(user:any): Promise<any> {
    // let endpoint = `${environment.BASEAPIURL}/users/authenticate`;
    let endpoint = 'https://meanjwtrstcrd.herokuapp.com/api/users/authenticate';
    return this.http
    .post(endpoint, JSON.stringify(user), { headers: this.headerOptions})
    .toPromise()
    .then(res => {
      var decodedToken = this.decodeToken(res.json().token);
      this.setUserInfo(decodedToken);
      this.setSession(res.json());
    })
    .catch(this.catchError);
  }

}
