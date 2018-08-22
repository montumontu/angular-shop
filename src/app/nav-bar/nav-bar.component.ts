import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { DataService } from '../../data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  totalProduct:number = 0;
  constructor(private data:DataService) {
   }

  ngOnInit() {
    console.log("fd");
    this.data.currentCount.subscribe(cartCount => this.totalProduct = cartCount);
  }

}
