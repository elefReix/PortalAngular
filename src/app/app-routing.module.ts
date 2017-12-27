import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import { MangtInvoiceComponent } from './mangt-invoice/mangt-invoice.component';

const mainRoutes : Routes = [
    {path: 'Usuarios', component : UsuariosComponent},
    {path: 'Cargas', component : UploadInvoiceComponent},
    {path: 'GestionCargas', component : MangtInvoiceComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(mainRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
