import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { SignUp } from '../sign-up/sign-up';
import { SignIn } from '../sign-in/sign-in';

@Injectable()
export class ProductService {
  readonly ROOT_URL = 'http://localhost:3000';
  products: Observable<Product[]>;
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.ROOT_URL + '/products');
  }


  postNewUser(signUp) {
    console.log(signUp, "Sign up");
    console.log('cjevh ddsignup');
    const body = JSON.stringify(signUp);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post<SignUp[]>(this.ROOT_URL + '/user/signup', body, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  signInForm(signIn) {
    return new Promise((res, rej) => {
      console.log(signIn, 'Sign In');
      const body = JSON.stringify(signIn);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      return this._http.post<SignIn[]>(this.ROOT_URL + '/user/login', body, httpOptions).subscribe(
        (data: any) => {
          console.log(data);
          res(data);
        }
      );
    });
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}