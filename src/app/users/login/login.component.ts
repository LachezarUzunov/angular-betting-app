import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {}

  enteredEmail: string = '';
  enteredPass: string = '';

  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      return
    }

    const login = {
      email: loginForm.value.email,
      password: loginForm.value.password
    }
  }
}
