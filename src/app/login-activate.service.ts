import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot ,CanActivate} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginActivateService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|boolean{
      let self=this;
      this.userService.isLoggedIn().subscribe(response=>{
          if(!response) self.router.navigate(['login']);
        });
      return true
  }
}
