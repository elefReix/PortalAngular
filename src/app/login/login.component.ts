import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log('Pantalla de login ');
  }
  loginUser(e) {
    console.log("Entramos al metodo de autenticacion");
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
    console.log("Usuario : "+username + " | ","Password : "+password);
    	if(username == 'admin' && password == 'admin') {
    		this.router.navigate(['Mainpage']);
    	}else if(username == 'user' && password == 'user'){
        this.router.navigate(['Usuarios']);
      }
    }

}
