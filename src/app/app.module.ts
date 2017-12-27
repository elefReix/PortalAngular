import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import { MangtInvoiceComponent } from './mangt-invoice/mangt-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UploadInvoiceComponent,
    MangtInvoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
