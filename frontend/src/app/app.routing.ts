import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {AppointmentDetailsComponent} from './components/appointment-details/appointment-details.component';
import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component : LogoutComponent
  },
  {
    path: 'appointments',
    component : AppointmentComponent
  },
  {
    path: 'appointment-detail/:appt_id',
    component: AppointmentDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];
