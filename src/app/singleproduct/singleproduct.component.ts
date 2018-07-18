import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  constructor() { }
  @Output() addCartCount: EventEmitter<number> = new EventEmitter();

  count:number=0;
  counter() {
    this.count += 1;
    this.addCartCount.emit(this.count);
  };
  @Input() product;
  ngOnInit() {
  }
}
