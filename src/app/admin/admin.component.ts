import { Component, OnInit } from '@angular/core';
import { LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private loginservice: LoginserviceService) { }
  title = "Hola "+ this.loginservice.username ;
  ngOnInit() { }
}
