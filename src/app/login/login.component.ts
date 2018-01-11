import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario : string;
  constructor(private router:Router, private loginservice: LoginserviceService) { }

  ngOnInit() {   console.log('Pantalla de login ');  }
  
  loginUser(e) {
    console.log("Entramos al metodo de autenticacion");
    var username = e.target.elements[0].value;
    this.nombreUsuario = username;
  	var password = e.target.elements[1].value;
    console.log("Usuario : "+username + " | ","Password : "+password);
    	if(username == 'admin' && password == 'admin') {
        this.loginservice.setUserLoggedIn();
        this.router.navigate(['admin']);
        this.loginservice.username = this.nombreUsuario;
        console.log("Usuario '" + this.loginservice.username + "' | autenticado '" +this.loginservice.getUserLoggedIn()+"'");
    	}else if(username == 'user' && password == 'user'){
        this.router.navigate(['usuario']);
      }
    }

}
