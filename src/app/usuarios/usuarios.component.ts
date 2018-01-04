import { Component, OnInit } from '@angular/core';
import { LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(private loginservice: LoginserviceService) { }
  saludo = "Hola "+ this.loginservice.username ;
  ngOnInit() { }
}
