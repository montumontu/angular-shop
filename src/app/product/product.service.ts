import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Product} from './product.model';


@Injectable()
export class ProductService {
  readonly ROOT_URL = 'http://localhost:3000';
  products: Observable<Product[]>;
  
  constructor(private _http:HttpClient) {}
  getProducts():Observable<Product[]> {
    return  this._http.get<Product[]>(this.ROOT_URL+'/products');
   // console.log(this.products);
  }
}


// getProducts() {
//   return [{'productId':'1234', 'productName':'Apple', 'productDesc':'Stay healthy', 'productImg':'apple', 'productPrice':'100'},
//   {'productId':'1234', 'productName':'Cherry', 'productDesc':'Eat healthy', 'productImg':'cherry', 'productPrice':'200'},
//   {'productId':'1234', 'productName':'Mango', 'productDesc':'Delicious', 'productImg':'mango', 'productPrice':'300'},
//   {'productId':'1234', 'productName':'Litchi', 'productDesc':'Lovely', 'productImg':'litchi', 'productPrice':'400'}]
// }
