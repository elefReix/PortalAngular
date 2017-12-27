import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import { MangtInvoiceComponent } from './mangt-invoice/mangt-invoice.component';
import { DetalleInvitacionComponent } from './usuarios/detalle-invitacion/detalle-invitacion.component';

import { AppRouting }     from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UploadInvoiceComponent,
    MangtInvoiceComponent,
    DetalleInvitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
