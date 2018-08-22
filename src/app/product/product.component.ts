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
  count = 0;
 public products : Product[];
 @Output() totalCartCountEmit: EventEmitter<number> =new EventEmitter();
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  totalCartCount($event){
    console.log("hi pop");
    this.count += 1;
    this.totalCartCountEmit.emit(this.count);
    this.data.changeCount(this.count);
  }

}
