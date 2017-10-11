import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SuccessComponent} from './success/success.component';
import {LoginComponent} from './login/login.component';
export const appRoutes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path:'login',
  name:'login',
  component : LoginComponent,
  useAsDefault:true
  },

{ path:'success',
name:'success',
component : SuccessComponent
},

{path: '**',
redirectTo:'/login'}


]
