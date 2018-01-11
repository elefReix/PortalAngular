import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';

import { AdminComponent } from './admin/admin.component';  /*281217*/
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component';  /*281217*/
import { InvitacionesComponent } from './admin/invitaciones/invitaciones.component'; /*281217*/
import { UtileriaComponent } from './utileria/utileria.component';  /*281217*/
import { CabeceraComponent } from './cabecera/cabecera.component';   /*291217*/
import { LoginComponent } from './login/login.component';   /*291217*/

import { InicioComponent } from './inicio/inicio.component'; /*020118*/
import { LoginserviceService } from './loginservice.service';
import { PedidosComponent } from './usuarios/ventas/pedidos/pedidos.component';
import { DetallePedidoComponent } from './usuarios/ventas/detallePedido/detallePedido.component';
import { VentasComponent } from './usuarios/ventas/ventas.component';


const mainRoutes : Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },/*281217*/
    { path: 'usuario', component : UsuariosComponent},
    { path: 'admin', component : AdminComponent},   /*281217*/
    { path: 'proveedores', component : ProveedoresComponent},   /*281217*/
    { path: 'invitaciones', component : InvitacionesComponent},    /*281217*/
    { path: 'utileria', component : UtileriaComponent},   /*281217*/
    { path: 'cabecera', component : CabeceraComponent },   /*291217*/
    { path: 'login', component : LoginComponent },   /*291217*/
    { path: 'inicio', component : InicioComponent}, /*020118*/
    { path: 'pedidos', component : PedidosComponent},
    { path: 'detallePedidos', component : DetallePedidoComponent},
    { path: 'ventas', component : VentasComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(mainRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
