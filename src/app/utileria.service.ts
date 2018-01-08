import { Injectable } from '@angular/core';


@Injectable()
export class UtileriaService {
  getPedidos(){
    return [
      { monto:248573,  fechaPedido: '10-02-17', estado:'enviado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones',  moneda:'pesos', pedido :'Manda8571'},
      { monto:438573,  fechaPedido: '22-02-17', estado:'cancelado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda1349'},
      { monto:73,  fechaPedido: '12-04-17', estado:'pendiente',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda156'},
      { monto:857473,  fechaPedido: '04-02-17', estado:'enviado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda3421'},
      { monto:545573,  fechaPedido: '14-02-17', estado:'pendiente',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda23541'},
      { monto:473,  fechaPedido: '28-07-17', estado:'enviado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda1432'},
      { monto:8573,  fechaPedido: '26-11-17', estado:'enviado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda46561'},
      { monto:87573,  fechaPedido: '02-12-17', estado:'pendiente',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda15657'},
      { monto:4800000573,  fechaPedido: '12-02-17', estado:'cancelado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda1345'},
      { monto:22,  fechaPedido: '17-01-17', estado:'enviado',cantidadTotal:'27', precioTotal:'4958334',  numeroOC:'091430', fechaEntrega:'23-03-18', condicionesPago:'Sin condiciones', moneda:'pesos', pedido :'Manda3451'},
    ];
  } 
  constructor() { }

}
