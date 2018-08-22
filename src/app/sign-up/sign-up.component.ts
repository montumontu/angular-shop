import { Component, OnInit, Input } from '@angular/core';
import {SignUp} from './sign-up';
import { ProductService } from '../product/product.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // email: String;
  @Input() signup = new SignUp;

  constructor( private productService : ProductService ) {}

  signUpForm() {
    console.log('xxdx');
   // console.log(form);
   // console.log(this.signup);
    this.productService.postNewUser(this.signup);
  }

  ngOnInit() {
    console.log('fsf');
  }

}
