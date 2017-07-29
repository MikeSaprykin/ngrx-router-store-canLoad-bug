import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ActionWithPayload } from 'app/store/store.helpers';

import { LOGIN_USER } from '../actions';

@Injectable()
export class LoginEffects {

  constructor(public actions$: Actions) {}

  @Effect()
  logInAction$: Observable<ActionWithPayload<any>> = this.actions$
    .ofType(LOGIN_USER)
    .map(action => action);
}
