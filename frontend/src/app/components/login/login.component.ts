import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  show_error = false;
  err_text = "";

  resetShowError(){
    this.show_error = false;
  }

  validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  loginUser(form:any){
    if (!form.user_email || !form.user_password){
      this.show_error = true;
      this.err_text = "Please fill all values";
      return ;
    }

    if (!this.validateEmail(form.user_email)){
      this.show_error = true;
      this.err_text = "Please use valid Email";
      return ;
    }

    const user = {
      email: form.user_email,
      password:form.user_password,
    }

    this.authService.authenticateUser(user)
    .then( () => {
      if (this.authService.isLoggedIn){
        this.router.navigate(['/appointments']);
      };
    })
    .catch(err => console.log("This is here ", err));
  }

}
