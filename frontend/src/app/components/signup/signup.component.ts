import { Component, OnInit } from '@angular/core';
import { User} from '../../class/user';
import { SignupService } from '../../services/signup.service';
import { AuthenticateService} from '../../services/authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private signupService: SignupService,
    public authService: AuthenticateService
  ) { }

  ngOnInit() {
  }

  show_alert = false;
  show_error = false;
  err_text = "";

  resetShowError(){
    this.show_error = false;
    this.show_alert = false;
  }

  validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validatePassMatch(pass1, pass2){
    return (pass1 === pass2);
  }

  signupUser(form: any){
    if (!form.user_email || !form.user_password || !form.user_fullname || !form.user_password_confirm){
      this.show_error = true;
      this.err_text = "Please fill all values";
      return ;
    }

    if (!this.validateEmail(form.user_email)){
      this.show_error = true;
      this.err_text = "Please use valid Email";
      return ;
    }

    if (!this.validatePassMatch(form.user_password, form.user_passpword_confirm)){
      this.show_error = true;
      this.err_text = "Passwords don't Match!";
      return ;
    }

    const newUser = {
      email: form.user_email,
      password:form.user_password,
      fullname: form.user_fullname,
    }

    this.signupService.createUser(newUser).then( data => {
      if (data.user_created){
        this.show_alert = true;
        this.show_error = false;
      } else {
        this.err_text = `${newUser.email} has been taken`;
        this.show_error = true;
      }
    }).catch(err => console.log("This is here ", err));


  }

}
