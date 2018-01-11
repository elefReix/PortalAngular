import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminComponent } from './admin/admin.component';/*281217*/
import { InvitacionesComponent } from './admin/invitaciones/invitaciones.component'; /*281217*/
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component'; /*281217*/

import { AppRouting } from './app-routing.module';    /*271217*/

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*281217*/
import { HttpModule } from '@angular/http'; /*281217*/
import { UtileriaComponent } from './utileria/utileria.component';
import { CabeceraComponent } from './cabecera/cabecera.component';  /*291217*/
import { LoginComponent } from './login/login.component'; /*291217*/
import { LoginserviceService } from './loginservice.service';   /*291217*/

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; /*020118*/
import { InicioComponent } from './inicio/inicio.component';
import { DetallePedidoComponent } from './usuarios/ventas/detallePedido/detallePedido.component';
import { PedidosComponent } from './usuarios/ventas/pedidos/pedidos.component'; /*020118*/
import { UtileriaService } from './utileria.service';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { VentasComponent } from './usuarios/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,/*281217*/
    UsuariosComponent,
    ProveedoresComponent,/*281217*/
    InvitacionesComponent,/*281217*/
    UtileriaComponent, /*291217*/
    CabeceraComponent, /*291217*/
    LoginComponent, /*291217*/
    InicioComponent, /*020118*/
    DetallePedidoComponent, 
    PedidosComponent, VentasComponent /*020118*/
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule, /*281217*/
    HttpModule, /*281217*/
    ReactiveFormsModule,  /*281217*/
    NgbModule /*020118*/
  ],
  providers: [LoginserviceService,UtileriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
