import { Component, OnInit } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-invitaciones',
  templateUrl: './invitaciones.component.html',
  styleUrls: ['./invitaciones.component.css']
})
export class InvitacionesComponent implements OnInit {

  constructor() {
    console.log('Entramos al typescript');
  }

  ngOnInit() {
  }
  proveedores = [
    { rfc:'VASJ302043', nombre: 'Mr. Nice', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Narco', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Bombasto', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Celeritas', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Magneta', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'RubberMan', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Dynama', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Dr IQ', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Magma', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { rfc:'VASJ302043', nombre: 'Tornado', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
  ];
  show = false;
  select(){
    this.show = true;
  }
  cancelar(){
    this.show = false;
  }
  
  
}
