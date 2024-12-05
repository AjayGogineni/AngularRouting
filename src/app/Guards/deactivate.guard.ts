import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AdduserComponent } from '../components/adduser/adduser.component';

export class deactivateGuard implements CanDeactivate<AdduserComponent> {
  canDeactivate(component: AdduserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(component.userName.dirty){
      console.log(component.userName.dirty);
      return window.confirm('You have some Unsaved changes. Are you sure you want to navigate.?')
    }
    else
    {
      return true;
    }
  }
}
