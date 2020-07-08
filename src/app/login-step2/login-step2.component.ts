import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.scss']
})
export class LoginStep2Component implements OnInit {

  username: string;
  password = new FormControl();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.username = this.loginService.loginData.username;
  }

  login() {
    console.log({
      username: this.username,
      password: this.password.value
    });
  }

}
