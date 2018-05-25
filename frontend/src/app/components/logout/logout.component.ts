import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from '../../services/authenticate.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    public authService: AuthenticateService,
    private router: Router) { }


  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
