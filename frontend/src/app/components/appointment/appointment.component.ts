import { Component, OnInit } from '@angular/core';
import { AppointmentService} from '../../services/appointment.service';
import { AuthenticateService} from '../../services/authenticate.service';
import { Appointment} from '../../class/appointment';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthenticateService
  ) { }

  appointments: Appointment[];

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
      // console.log("APP COMP ", data);
    })
    .catch( err => console.log(err));
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
