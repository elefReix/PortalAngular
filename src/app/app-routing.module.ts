import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import { MangtInvoiceComponent } from './mangt-invoice/mangt-invoice.component';
import { DetalleInvitacionComponent } from './usuarios/detalle-invitacion/detalle-invitacion.component';
/*281217*/
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProveedoresComponent } from './usuarios/proveedores/proveedores.component';
/*281217*/
const mainRoutes : Routes = [
    { path: '', redirectTo: '/Mainpage', pathMatch: 'full' },/*281217*/
    {path: 'Usuarios', component : UsuariosComponent},
    {path: 'Cargas', component : UploadInvoiceComponent},
    {path: 'GestionCargas', component : MangtInvoiceComponent},
    {path: 'DetalleInvitacion', component : DetalleInvitacionComponent},
    {path: 'Proveedores', component : ProveedoresComponent},
    {path: 'Mainpage', component : MainpageComponent}/*281217*/
];

@NgModule({
  imports: [ RouterModule.forRoot(mainRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
