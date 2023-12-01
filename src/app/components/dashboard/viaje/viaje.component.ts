import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViajeService } from 'src/app/services/viaje.service';
import { viaje } from '../../../interfaces/viaje';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.Component.html',
  styleUrls: ['./viaje.Component.scss']
})
export class ViajeComponent {
  listaViaje:viaje[] = [];


  displayedColumns: string[] = ['position', 'nombre', 'correo', 'tipo', 'role', 'idioma', 'acciones'];


  dataSource!: MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  constructor(private _viajeService:ViajeService){

  }
  ngOnInit():void{
    this.cargarViaje();
  }
  cargarViaje(){
    this.listaViaje = this._viajeService.getViaje();
    this.dataSource = new MatTableDataSource(this.listaViaje);
  }

  eliminarViaje(index: number){
    console.log(index);
    this._viajeService.eliminarViaje(index);
    this.cargarViaje();
  }
}
