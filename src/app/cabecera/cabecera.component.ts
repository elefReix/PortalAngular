import { Component, OnInit } from '@angular/core';
import { LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private loginservice: LoginserviceService) { }
  user = this.loginservice.username ;
  ngOnInit() {
  }

}
