import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { ROOT_STORE_MODULE } from 'app/store';
import { APP_GUARDS } from 'app/guards';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ...ROOT_STORE_MODULE
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    ...APP_GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
