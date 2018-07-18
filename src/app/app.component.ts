import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noOfProducts = new Array(5);

  cartCount:number= 0;

  cartCounter($event) {
    console.log($event);
    this.cartCount = $event ;
  }

}
