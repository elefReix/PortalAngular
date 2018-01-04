import { Component, OnInit } from '@angular/core';
import { LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(private loginservice: LoginserviceService) { }
  title = "Hola "+ this.loginservice.username ;
  ngOnInit() { }
}
