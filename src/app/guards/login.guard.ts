import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  /**
   *
   */
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  //router yönlendirmek için eklendi.


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      this.toastr.error("Giriş yapınız", "Hata");
      return false;
    }
  }
}
//sadece tek guard ile çalışmaz interceptorlar gibi.
