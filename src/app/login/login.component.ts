import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: `app/login/login.component.html`,
  styleUrls: ['app/login/login.component.css']
})

export class LoginComponent  {
cr:boolean;
  constructor(
   private router: Router

 ){

   this.cr = true;
 }

 check()
 {
   return this.cr;
 }
	onSubmit(value : any)
	{


		console.log(value);

		if(value.password == "123456")
		{
      console.log("here");
  //    Cookie.set('LoggedIn', true);
       this.router.navigate(['success']);
//     this._location.back();
		}
		else
		{
		//this._router.navigate(['Success']);
  //   this.router.navigate(['./su']);

    this.cr = false;

		}
	}



}
