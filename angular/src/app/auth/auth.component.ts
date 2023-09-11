import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "./auth.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  emailErrorMsg: string = '';
  passwordErrorMsg: string = '';

  constructor (private authService: AuthService) {}

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password).then(response => {
      console.log(response.data)
    }).catch(err => {
      this.showErrorMessage(err.response.data.errors);
    });

  }

  private showErrorMessage(message: Array<{message: string, field: string}>) {
      message.forEach(value => {
        if(value.field == 'email' || value.message.toLocaleLowerCase().includes('email')) {
          this.emailErrorMsg = value.message
        } else if (value.field == 'password' || value.message.toLocaleLowerCase().includes('password')) {
          this.passwordErrorMsg = value.message
        }
      })

  }
}