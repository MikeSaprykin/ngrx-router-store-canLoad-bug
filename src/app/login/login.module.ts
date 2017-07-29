import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { reducer } from './reducers';
import { LoginEffects } from './effects';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    StoreModule.forFeature('login', reducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule { }
