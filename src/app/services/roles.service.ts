import { Injectable } from '@angular/core';
import { roles } from '../interfaces/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  listaRoles: roles[] = [
    {position: 1, role: 'Administrador', alcance: 'Administrador', permisos: 'Todos'},
    {position: 2, role: 'Usuario', alcance: 'Usuario', permisos: 'Creacion'},
    {position: 3, role: 'Proveedor', alcance: 'Proveedor', permisos: 'Confirmacion'}
    ];
  constructor() { }
  getRoles(){
    return this.listaRoles.slice();
  }
  
  eliminarRole(index:number){
    console.log(index);
    this.listaRoles.splice(index,1);
  }
}
