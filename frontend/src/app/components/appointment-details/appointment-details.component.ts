import { Component, OnInit } from '@angular/core';
import { AppointmentService} from '../../services/appointment.service';
import { AuthenticateService} from '../../services/authenticate.service';
import { ActivatedRoute } from '@angular/router';
import { Appointment} from '../../class/appointment';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthenticateService,
    private activatedRoute: ActivatedRoute
  ) { }

  appt_id = this.activatedRoute.snapshot.paramMap.get('appt_id');
  user_id = this.authService.getLoggedUserID();

  appointment: Appointment;
  show_editForm = false;

  show_alert = false;
  show_error = false;
  err_text = "";

  resetShowError(){
    this.show_error = false;
    this.show_alert = false;
  }

  toggleEditForm(){
    this.show_editForm = !this.show_editForm;
    this.getAppointment();
  }

  editAppt(editForm: any){
    if (!editForm.appt_title || !editForm.appt_with_person || !editForm.appt_date || !editForm.appt_notes){
      this.show_error = true;
      this.err_text = "Please fill all values";
      this.getAppointment();
      return ;
    }

    this.appointmentService.editApptByIdOfLoggedUser(this.user_id, this.appt_id, this.appointment)
    .then( (data) => {
      this.appointment = data;
      this.show_editForm = false;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getAppointment(): void{
    this.appointmentService.getApptByIdOfLoggedUser(this.user_id, this.appt_id)
    .then( (data) => {
      this.appointment = data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getAppointment();
  }

}
