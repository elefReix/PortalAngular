import { Injectable } from '@angular/core';

@Injectable()
export class LoginserviceService {
  
  private isUserLoggedIn = false;
  public username = "" ;

  constructor() {
    console.log('Servicio login activado. El usuario : ' + this.getUserLoggedIn());
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  }

  getUserLoggedIn():boolean {
  	return this.isUserLoggedIn;
}
}
//5562681021- 575660