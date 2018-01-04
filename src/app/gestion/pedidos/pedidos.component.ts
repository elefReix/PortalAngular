import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  pedidos = [
    { numero:'765402043', nombre: 'Mr. Nice', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'7564e302043', nombre: 'Narco', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'98978302043', nombre: 'Bombasto', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'345302043', nombre: 'Celeritas', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'45654302043', nombre: 'Magneta', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'45906302043', nombre: 'RubberMan', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'123302043', nombre: 'Dynama', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'3457302043', nombre: 'Dr IQ', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'3405302043', nombre: 'Magma', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
    { numero:'9568302043', nombre: 'Tornado', calle: 'justina', noExterno:'121',noInterno:'S/N', colonia:'San Lorenzo', estado:'DF', cp:'09130', mail:'jesus.elef@gmail.com', banco:'santander', ctaBanco:'034567865432',telefono:'567865437632' },
  ];
}
