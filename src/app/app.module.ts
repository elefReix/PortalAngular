import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import { MangtInvoiceComponent } from './mangt-invoice/mangt-invoice.component';
import { DetalleInvitacionComponent } from './usuarios/detalle-invitacion/detalle-invitacion.component';

import { AppRouting }     from './app-routing.module';
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainpageComponent } from './mainpage/mainpage.component'; /*281217*/

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UploadInvoiceComponent,
    MangtInvoiceComponent,
    DetalleInvitacionComponent,
    ProveedoresComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
