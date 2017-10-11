import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {SuccessComponent} from './success/success.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route.js';
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)
   ],
  declarations: [ AppComponent,SuccessComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
