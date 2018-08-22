import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: ProductService, private _router:Router) {
  }
  canActivate(): boolean {
      if (this._authService.loggedIn()) {
        return true;
      } else {
        this._router.navigate(['/signIn']);
        return false;
      }
  }
}
