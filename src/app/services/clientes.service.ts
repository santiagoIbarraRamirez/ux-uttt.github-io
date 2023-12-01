import { Injectable } from '@angular/core';
import { clientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  listaClientes: clientes[] = [
    {position: 1, nombre: 'cliente1', correo: 'AdminClient@gmail.com', tipo: '4445654574', role: '4355474657', idioma:'Esp'},
    {position: 2, nombre: 'Sanitago Ibarra cliente', correo: 'santiago.ibarra.ramirez@gmail.com', tipo: '43655646545', role: '65564456554', idioma:'Esp'},
  ];

  constructor() { }

  getClientes(){
    return this.listaClientes.slice();
  }

  eliminarClientes(index:number){
    console.log(index);
    this.listaClientes.splice(index,1);
  }
  agregarClientes(clientes: clientes){
    this.listaClientes.unshift(clientes);

  }
}
