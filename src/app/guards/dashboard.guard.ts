import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanLoad, Router } from '@angular/router';

@Injectable()
export class DashboardGuard implements CanLoad {

  constructor(public router: Router) {}

  canLoad(
    route): Observable<boolean> | Promise<boolean> | boolean {
    this.router.navigate(['login']);
    return false;
  }
}
