import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';

import { MainpageComponent } from './mainpage/mainpage.component';  /*281217*/
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component';  /*281217*/
import { InvitacionesComponent } from './usuarios/invitaciones/invitaciones.component';   /*281217*/
import { NuevosComponent } from './usuarios/nuevos/nuevos.component';  /*281217*/
import { SConfirmarComponent } from './usuarios/s-confirmar/s-confirmar.component';  /*281217*/
import { UtileriaComponent } from './utileria/utileria.component';  /*281217*/
import { CabeceraComponent } from './cabecera/cabecera.component';   /*291217*/
import { FooterComponent } from './footer/footer.component';   /*291217*/
import { LoginComponent } from './login/login.component';   /*291217*/

import { InicioComponent } from './inicio/inicio.component'; /*020118*/
import { CargaFacturaComponent} from './usuarios/carga-factura/carga-factura.component'; /*020118*/
import { GestionComponent } from './gestion/gestion.component';
import { FacturaComponent } from './gestion/factura/factura.component';
import { OrdenCompraComponent } from './gestion/orden-compra/orden-compra.component';
import { TickesComponent } from './usuarios/tickes/tickes.component';
import { LoginserviceService } from './loginservice.service';
import { ListasComponent } from './listas/listas.component';


const mainRoutes : Routes = [
    { path: '', redirectTo: '/Inicio', pathMatch: 'full' },/*281217*/
    { path: 'Usuarios', component : UsuariosComponent},
    { path: 'Mainpage', component : MainpageComponent},   /*281217*/
    { path: 'Proveedores', component : ProveedoresComponent},   /*281217*/
    { path: 'Invitaciones', component : InvitacionesComponent},    /*281217*/
    { path: 'Nuevos', component : NuevosComponent},   /*281217*/
    { path: 'SConfirmar', component : SConfirmarComponent},   /*281217*/
    { path: 'Utileria', component : UtileriaComponent},   /*281217*/
    { path: 'Cabecera', component : CabeceraComponent },   /*291217*/
    { path: 'Login', component : LoginComponent },   /*291217*/
    { path: 'Footer', component : FooterComponent },   /*291217*/
    { path: 'Inicio', component : InicioComponent}, /*020118*/
    { path: 'Cargas', component : CargaFacturaComponent},/*020118*/
    { path: 'Gestion', component : GestionComponent},
    { path: 'Facturas', component : FacturaComponent},
    { path: 'Ordenes', component : OrdenCompraComponent},
    { path: 'Tickets', component : TickesComponent},
    { path: 'Listas', component : ListasComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(mainRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
