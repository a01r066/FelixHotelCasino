import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {EncryptDecryptService} from '../../data-services/encrypt-decrypt.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private encryptDecryptService: EncryptDecryptService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }

  onRegister(){
    const password = this.registerForm.value.password;
    const encryptedPassword = this.encryptDecryptService.set('123456$#@$^@1ERF', password);

    const registerData = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: encryptedPassword
    };

    if(this.registerForm.valid){
      this.authService.registerUser(registerData);
    }
  }
}
