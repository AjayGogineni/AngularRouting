import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor() { }
  isLogin: boolean = false;
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.isLogin) {
      return false;
    }
    else {
      // this._toastr.info(
      //   'You need to login to access the feature.',
      //   'Login Required'
      // )
      return   window.confirm('You need to login to access the featureLogin Required')
    }
  }
};
