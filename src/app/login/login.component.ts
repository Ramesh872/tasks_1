import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, NgForm, FormGroupDirective, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { Login } from '../services/models/login'
import { DataService } from '../services/data.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  login: Object;

  model: Login;

  emailID = ''
  pswd = '';


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  // LifeCycle - ngOnInit
  ngOnInit() {
    this.model = new Login('', '');
  }

  // Login Form to submit
  onSubmit() {

    let email = 'dotcodtest@gmail.com';
    let password = 'admin1234';

    if (this.model.Contact_Email === email && this.model.password === password) {
      this.dataService.login().subscribe(data => {
        this.router.navigate(['/document']);
      });
    } else {
      this.router.navigate(['/']);
    }
    

    console.log(this.model.Contact_Email);
    console.log(this.model.password);
}

}
