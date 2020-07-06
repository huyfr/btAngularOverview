import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  flag = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.doLogin();
  }

  doLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get rfc() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.flag = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
  }
}
