import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './cliente/cliente.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { CrearRolesComponent } from './roles/crear-roles/crear-roles.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { CrearProveedorComponent } from './proveedor/crear-proveedor/crear-proveedor.component';
import { CrearViajeComponent } from './viaje/crear-viaje/crear-viaje.component';

const routes: Routes = [
  { path:'', component: DashboardComponent,
  children:[
    {path:'', component:InicioComponent},
    {path:'roles', component:RolesComponent},
    {path:'cliente', component:ClientesComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path:'proveedor', component:ProveedorComponent},
    {path:'viaje', component:ViajeComponent},
    {path:'idioma', component:IdiomaComponent},
    {path:'crear-role', component:CrearRolesComponent},
    {path:'crear-usuario', component:CrearUsuarioComponent},
    {path:'crear-cliente', component:CrearClienteComponent},
    {path:'crear-viaje', component:CrearViajeComponent},
    {path:'crear-proveedor', component:CrearProveedorComponent},
  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
