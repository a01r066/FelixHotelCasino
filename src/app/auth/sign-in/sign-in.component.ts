import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {EncryptDecryptService} from '../../data-services/encrypt-decrypt.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private encryptDecryptService: EncryptDecryptService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  onLogin(){
    const password = this.loginForm.value.password;
    const encryptPassword = this.encryptDecryptService.set('123456$#@$^@1ERF', password);
    // const decryptPassword = this.encryptDecryptService.get('123456$#@$^@1ERF', encryptPassword);
    // console.log("decrypt password: " + decryptPassword);
    const authData = {
      email: this.loginForm.value.email,
      password: encryptPassword,
    };

    if(this.loginForm.valid){
      this.authService.login(authData);
    }
  }
}
