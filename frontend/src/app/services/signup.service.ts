import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User} from '../class/user';
import 'rxjs/add/operator/toPromise';
import  {environment}  from '../../environments/environment';

@Injectable()
export class SignupService {

  constructor(
    private http: Http
  ) { }

  private headerOptions = new Headers({'Content-Type': 'application/json'});

  private catchError(error: any): Promise<any>{
		console.error('Error: ', error);
		// return Promise.reject(error.message);
    return error;
	}

  createUser(user:any): Promise<any> {
    let endpoint = `${environment.BASEAPIURL}/users/signup`;
    return this.http
    .post(endpoint, JSON.stringify(user), {headers: this.headerOptions})
    .toPromise()
    .then(res => res.json())
    .catch(this.catchError);
  }

}
