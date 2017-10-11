import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {SuccessComponent} from './success/success.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([

    { path: '', redirectTo: '/login', pathMatch: 'full'  },
    { path:'login',

    component : LoginComponent,

    },

  { path:'success',

  component : SuccessComponent
},
{path: '**',
redirectTo:'/login'}



  ])
   ],
  declarations: [ AppComponent,SuccessComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
