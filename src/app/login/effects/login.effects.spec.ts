import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { LoginEffects } from './login.effects';
import { RouterTestingModule } from '@angular/router/testing';
import {cold, hot} from 'jasmine-marbles';
import {loginUser} from 'app/login/actions';

describe('My Effects', () => {
  let effects: LoginEffects;
  let actions: any;

    beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        LoginEffects,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(LoginEffects);
  });


  it('should work', () => {
    actions = hot('--a-', { a: loginUser(null) });

    const expected = cold('--b', loginUser(null));

    expect(effects.logInAction$).toBeObservable(expected);
  });

  it('should work also', () => {
    actions = new ReplaySubject(1);

    actions.next(loginUser(null));

    effects.logInAction$.subscribe(result => {
      expect(result).toEqual(loginUser(null));
    });
  });
});
