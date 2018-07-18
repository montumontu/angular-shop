import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import {Product} from './product.model';
import { ProductService } from './product.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService, private data: DataService) { }
  noOfProducts = new Array(5);
  count:number=0;
  // counter() {
  //   this.count += 1;
  // }
 public products : Product[];
 @Output() totalCartCountEmit: EventEmitter<number> =new EventEmitter();
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);  
    });
    setTimeout(()=>console.log(this.products + "thisProduct"),10000);
  }
  totalCartCount($event){
    console.log("hi pop");
    this.count += 1;
    this.totalCartCountEmit.emit(this.count); 
    this.data.changeCount(this.count);
  }

}
