import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MainpageComponent } from './mainpage/mainpage.component';/*281217*/
import { InvitacionesComponent } from './usuarios/invitaciones/invitaciones.component'; /*281217*/
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component'; /*281217*/

import { AppRouting } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*281217*/
import { HttpModule } from '@angular/http'; /*281217*/
import { UtileriaComponent } from './utileria/utileria.component';
import { NuevosComponent } from './usuarios/nuevos/nuevos.component';
import { SConfirmarComponent } from './usuarios/s-confirmar/s-confirmar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';  /*291217*/
import { LoginComponent } from './login/login.component'; /*291217*/
import { FooterComponent } from './footer/footer.component'; /*291217*/
import { LoginserviceService } from './loginservice.service';   /*291217*/

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
    FooterComponent /*291217*/

  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule, /*281217*/
    HttpModule, /*281217*/
    ReactiveFormsModule,  /*281217*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
