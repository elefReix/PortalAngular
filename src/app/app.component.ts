import { Component } from '@angular/core';
import { LoginserviceService} from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private loginservice: LoginserviceService){
    console.log('Arranca la aplicación  '+this.loginservice.username);
  }
  title = this.loginservice.username;
}
