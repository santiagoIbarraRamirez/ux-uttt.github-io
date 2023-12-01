import { Injectable } from '@angular/core';
import { usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  listaUsuarios: usuarios[] = [
    {position: 1, nombre: 'Admin', correo: 'Admin', tipo: 'Admin', role: 'admin', idioma:'Esp'},
    {position: 1, nombre: 'Sanitago Ibarra', correo: 'santiago.ibarra.ramirez@gmail.com', tipo: 'Admin', role: 'admin', idioma:'Esp'},
  ];
  
  constructor() { }
  
  getUsuarios(){
    return this.listaUsuarios.slice();
  }
  
  eliminarUsuario(index:number){
    console.log(index);
    this.listaUsuarios.splice(index,1);
  }
  agregarUsuario(usuario: usuarios){
    this.listaUsuarios.unshift(usuario);

  }
 
}
