import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RolesComponent } from './roles/roles.component';
import { ClientesComponent } from './cliente/cliente.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ViajeComponent } from './viaje/viaje.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { CrearRolesComponent } from './roles/crear-roles/crear-roles.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { CrearProveedorComponent } from './proveedor/crear-proveedor/crear-proveedor.component';
import { CrearViajeComponent } from './viaje/crear-viaje/crear-viaje.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    RolesComponent,
    UsuariosComponent,
    IdiomaComponent,
    CrearRolesComponent,
    CrearUsuarioComponent,
    ClientesComponent,
    CrearClienteComponent,
    ProveedorComponent,
    CrearProveedorComponent,
    CrearViajeComponent,
    ViajeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
