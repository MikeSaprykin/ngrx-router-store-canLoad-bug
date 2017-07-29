import { Action } from '@ngrx/store';

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

export function lookUpMatcher<State>(
  lookUp: Object,
  state: State,
  action: ActionWithPayload<any>
): State {
  return lookUp[action.type] ? lookUp[action.type](state, action) : state;
}
