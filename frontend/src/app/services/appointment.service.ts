import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  {environment}  from '../../environments/environment';
import { Appointment} from '../class/appointment';

@Injectable()
export class AppointmentService {

  constructor( private http: Http) { }

  private catchError(error: any): Promise<any>{
    console.error('Error: ', error);
    // return Promise.reject(error.message);
    return error;
  }

  private headerOptions = new Headers({'Content-Type': 'application/json', 'Authorization' : `BEARER ${localStorage.getItem('token')}`});


  // test(): Promise<any> {
  //   let endpoint = `${environment.BASEAPIURL}/appointments/test`;
  //   return this.http
  //   .get(endpoint, {headers: this.headerOptions})
  //   .toPromise()
  //   .then(res => res.json())
  //   .catch(this.catchError);
  //
  // }

  createAppointment(appt: Appointment): Promise<Appointment>{
    // let endpoint = 'https://meanjwtrstcrd.herokuapp.com/api/appointments/create';
    let endpoint = `${environment.BASEAPIURL}/appointments/create`;
    return this.http
    .post(endpoint, JSON.stringify(appt), {headers: this.headerOptions})
    .toPromise()
    .then( res => res.json().appointment as Appointment)
    .catch( this.catchError);
  }

  getAppointmentsOfLoggedUser(user_id:string): Promise<Appointment[]>{
    let endpoint = `${environment.BASEAPIURL}/appointments/${user_id}/all`;
    // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/all`;
    return this.http
    .get(endpoint, {headers: this.headerOptions})
    .toPromise()
    .then( res => res.json().appointments as Appointment[] )
    .catch( this.catchError);
  }

  getApptByIdOfLoggedUser(user_id:string, appt_id:string): Promise<Appointment>{
    let endpoint = `${environment.BASEAPIURL}/appointments/${user_id}/${appt_id}`;
    // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/${appt_id}`;
    return this.http
    .get(endpoint, { headers: this.headerOptions})
    .toPromise()
    .then( res => res.json().appointment as Appointment)
    .catch(this.catchError);
  }

  editApptByIdOfLoggedUser(user_id:string, appt_id:string, appt:Appointment): Promise<Appointment>{
    let endpoint = `${environment.BASEAPIURL}/appointments/${user_id}/${appt_id}`;
    // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/${appt_id}`;

    return this.http
    .put(endpoint, JSON.stringify(appt), {headers: this.headerOptions})
    .toPromise()
    .then( res => res.json().appointment as Appointment)
    .catch( this.catchError);
  }

  deleteAppByIdofLoggedUser(user_id:string, appt_id:string): Promise<any>{
    let endpoint = `${environment.BASEAPIURL}/appointments/${user_id}/${appt_id}`;
    // let endpoint = `https://meanjwtrstcrd.herokuapp.com/api/appointments/${user_id}/${appt_id}`;
    return this.http
    .delete(endpoint, {headers: this.headerOptions})
    .toPromise()
    .then( res => res.json() )
    .catch( this.catchError);
  }
}
