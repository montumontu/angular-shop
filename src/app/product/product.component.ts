import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService) { }
  noOfProducts = new Array(5);
 public products = [];
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);  
    });
    setTimeout(()=>console.log(this.products + "thisProduct"),10000);
   
  }

}
