import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'success',
  templateUrl: `app/success/success.component.html`,

})
export class SuccessComponent  {

constructor(

  private router: Router,
//  private _cookieService:CookieService
){}
	goBack(){
  //  this._cookieService.remove("LoggedIn");
//    Cookie.delete('LoggedIn');
	this.router.navigate(['login']);

	}


}
