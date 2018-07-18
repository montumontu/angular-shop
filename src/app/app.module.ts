import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ProductComponent } from './product/product.component'; 
import { ProductService} from './product/product.service';
import {HttpClientModule} from '@angular/common/http';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { DataService } from '../data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    LeftNavComponent,
    ProductComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProductService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
