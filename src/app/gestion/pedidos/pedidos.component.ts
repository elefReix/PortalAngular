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
    { numero:'765402043', fechaEmision: '12-09-17', estado: 'enviada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'7564e302043', fechaEmision: '12-09-17', estado: 'enviada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'98978302043', fechaEmision: '12-09-17', estado: 'cancelada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'345302043', fechaEmision: '12-09-17', estado: 'entregada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'45654302043', fechaEmision: '12-09-17', estado: 'enviada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'45906302043', fechaEmision: '12-09-17', estado: 'enviada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'123302043', fechaEmision: '12-09-17', estado: 'cancelada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'3457302043', fechaEmision: '12-09-17', estado: 'enviada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'3405302043', fechaEmision: '12-09-17', estado: 'cancelada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
    { numero:'9568302043', fechaEmision: '12-09-17', estado: 'entregada', fechaEntrega:'11-11-17',descripcion:'S/D', colonia:'San Lorenzo', entidad:'DF', cp:'09130', mail:'jesus.elef@gmail.com' },
  ];
}
