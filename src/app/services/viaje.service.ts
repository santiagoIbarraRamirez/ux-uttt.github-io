import { Injectable } from '@angular/core';
import { viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  listaViaje: viaje[] = [
    {position: 'v0001', nombreCliente: 'cliente1', correo: 'AdminClient@gmail.com', Contacto1: '4445654574', precio: 100.10, origen:'China'},
    {position: 'v0002', nombreCliente: 'Sanitago Ibarra cliente', correo: 'santiago.ibarra.ramirez@gmail.com', Contacto1: '43655646545', precio: 200.00, origen:'España'},
  ];

  constructor() { }

  getViaje(){
    return this.listaViaje.slice();
  }

  eliminarViaje(index:number){
    console.log(index);
    this.listaViaje.splice(index,1);
  }
  agregarViaje(viaje: viaje){
    this.listaViaje.unshift(viaje);
  }
}
