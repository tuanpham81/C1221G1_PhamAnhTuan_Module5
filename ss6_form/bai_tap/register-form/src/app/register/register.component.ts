import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required] ),
    age: new FormControl(null, [Validators.min(18), Validators.required]),
    country: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl(null, [Validators.required, Validators.pattern( /^\+84\d{9,10}$/)]),
    },
[this.checkMatchingPassword]
  );
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }

  checkMatchingPassword(password: AbstractControl) {
    const pass1 = password.get('password').value;
    const pass2 = password.get('confirmPassword').value;
    if (pass2 !== pass1) {
      return {notMatch: true};
    } else {
      return null;
    }
  }
}

