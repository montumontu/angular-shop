import { Component, OnInit, Input } from '@angular/core';
import {SignIn} from './sign-in';
import {ProductService} from '../product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private productService: ProductService, private _router: Router) { }
  @Input() signin = new SignIn;

  ngOnInit() {
  }

  signInForm() {
    console.log('Hi Sign in');
    this.productService.signInForm(this.signin).then((result: any) => {
      console.log(result, 'result');
      localStorage.setItem('token', result.token);
      this._router.navigate(['/products']);
    });
  }

}
