import { Injectable } from '@angular/core';
import { proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  listaProveedor: proveedor[] = [
    {position: 1, nombre: 'Admin', correo: 'Admin@gmail.com', tipo: '5545454879', role: '2154875157', idioma:'Esp'},
    {position: 2, nombre: 'Sanitago Ibarra', correo: 'santiago.ibarra.ramirez@gmail.com', tipo: '41154875489', role: '4456777887', idioma:'Esp'},
  ];

  constructor() { }

  getProveedor(){
    return this.listaProveedor.slice();
  }

  eliminarProveedor(index:number){
    console.log(index);
    this.listaProveedor.splice(index,1);
  }
  agregarProveedor(proveedor: proveedor){
    this.listaProveedor.unshift(proveedor);

  }
}
