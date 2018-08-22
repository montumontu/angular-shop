import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ProductComponent } from './product/product.component'; 
import { ProductService} from './product/product.service';
import { HttpClientModule} from '@angular/common/http';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { DataService } from '../data.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignUp} from './sign-up/sign-up';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
  {path: '', component: ProductComponent, canActivate: [AuthGuard] },
  {path: 'signUp', component: SignUpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    LeftNavComponent,
    ProductComponent,
    SingleproductComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, FormsModule,
  ],
  providers: [ProductService,DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
