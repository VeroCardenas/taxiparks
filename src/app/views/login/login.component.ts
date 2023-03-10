import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup(
      {
        phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
        CustomValidators.phoneNumber()]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), CustomValidators.password()]),
      },
      {}
    );
  }
}
