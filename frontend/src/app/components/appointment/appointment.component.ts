import { Component, OnInit } from '@angular/core';
import { AppointmentService} from '../../services/appointment.service';
import { AuthenticateService} from '../../services/authenticate.service';
import { Appointment} from '../../class/appointment';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  constructor(
    private appointmentService: AppointmentService,
    public authService: AuthenticateService
  ) { }

  appointments: Appointment[];
  top_appointments: Appointment[];

  // dataTable_itemsResource : any = {};
  // dataTable_appointments: any = {};
  // dataTable_itemsCount : number = 0;

  itemResource : any;
  items = [];
  itemCount = 0;

  show_alert = false;
  show_error = false;
  err_text = "";

  resetShowError(){
    this.show_error = false;
    this.show_alert = false;
  }

  show_form = false;
  toggleShowForm(){
    this.show_form = !this.show_form;
  }

  createAppointment(theForm: any){
    if (!theForm.appt_title || !theForm.appt_with_person || !theForm.appt_date || !theForm.appt_notes){
      this.show_error = true;
      this.err_text = "Please fill all values";
      return ;
    }

    const appointment = new Appointment();
    appointment.title = theForm.appt_title;
    appointment.with_person =  theForm.appt_with_person;
    appointment.appointment_date =  theForm.appt_date;
    appointment.notes=  theForm.appt_notes;
    appointment.user_id=  this.authService.getLoggedUserID();

    this.appointmentService.createAppointment(appointment)
    .then( (appt) => {
      this.show_alert = true;
      this.appointments.push(appt);
      this.top_appointments = this.top_appointments.slice(0, -1);
      this.top_appointments.push(appt);
      this.show_form = false;
    })
    .catch( err => {
      console.log("APPT COMP ", err)
    });

  }

  getUserAppointments(){
    const user_id= this.authService.getLoggedUserID();
    this.appointmentService.getAppointmentsOfLoggedUser(user_id)
    .then( data => {
      this.appointments = data;
      this.top_appointments = data.slice(0,5);
      // this.dataTable_itemsCount = data.length;
      // this.dataTable_itemsResource = new DataTableResource(data);
      // this.dataTable_itemsResource.count().then(count => this.dataTable_itemsCount = count);

      this.itemResource = new DataTableResource(data);
      this.items = this.itemResource.items
    })
    .catch( err => console.log(err));
  }

  // reloadItems(params) {
  //   this.dataTable_itemsResource.query(params).then(items => this.dataTable_itemsResource = items);
  // }
  
  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  rowTooltip(item) { 
    return item.title; 
  }

  ngOnInit() {
    // this.appointmentService.test()
    // .then( (app) => {
    //   console.log(app)
    // })
    // .catch(err => console.log(err));
    this.getUserAppointments();
  }

}
