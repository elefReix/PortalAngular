import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MainpageComponent } from './mainpage/mainpage.component';/*281217*/
import { InvitacionesComponent } from './usuarios/invitaciones/invitaciones.component'; /*281217*/
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component'; /*281217*/

import { AppRouting } from './app-routing.module';    /*271217*/

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*281217*/
import { HttpModule } from '@angular/http'; /*281217*/
import { UtileriaComponent } from './utileria/utileria.component';
import { NuevosComponent } from './usuarios/nuevos/nuevos.component';
import { SConfirmarComponent } from './usuarios/s-confirmar/s-confirmar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';  /*291217*/
import { LoginComponent } from './login/login.component'; /*291217*/
import { FooterComponent } from './footer/footer.component'; /*291217*/
import { LoginserviceService } from './loginservice.service';   /*291217*/

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; /*020118*/
import { InicioComponent } from './inicio/inicio.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CargaFacturaComponent } from './usuarios/carga-factura/carga-factura.component';
import { GestionComponent } from './gestion/gestion.component';
import { FacturaComponent } from './gestion/factura/factura.component';
import { OrdenCompraComponent } from './gestion/orden-compra/orden-compra.component';
import { TickesComponent } from './usuarios/tickes/tickes.component';
import { ListasComponent } from './listas/listas.component';
import { PedidosComponent } from './gestion/pedidos/pedidos.component'; /*020118*/
import { UtileriaService } from './utileria.service';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,/*281217*/
    UsuariosComponent,
    ProveedoresComponent,/*281217*/
    InvitacionesComponent,/*281217*/
    UtileriaComponent, /*291217*/
    NuevosComponent, /*291217*/
    SConfirmarComponent, /*291217*/
    CabeceraComponent, /*291217*/
    LoginComponent, /*291217*/
    FooterComponent, /*291217*/
    InicioComponent, /*020118*/
    WelcomeComponent, 
    CargaFacturaComponent, 
    GestionComponent, 
    FacturaComponent, 
    OrdenCompraComponent, 
    TickesComponent, 
    ListasComponent, 
    PedidosComponent /*020118*/
    

  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule, /*281217*/
    HttpModule, /*281217*/
    ReactiveFormsModule,  /*281217*/
    NgbModule, /*020118*/
    VirtualScrollModule
  ],
  providers: [LoginserviceService,UtileriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
