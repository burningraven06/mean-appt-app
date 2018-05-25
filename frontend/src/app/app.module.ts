import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutes} from './app.routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignupService } from './services/signup.service';
import { AuthenticateService } from './services/authenticate.service';
import { AppointmentService } from './services/appointment.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AppointmentComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SignupService, AuthenticateService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
