import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'environment';

import { reducers } from './store';

export const ROOT_STORE_MODULE = [
  StoreModule.forRoot(reducers),
  StoreRouterConnectingModule,
  EffectsModule.forRoot([]),
  !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
];

export * from './store';
