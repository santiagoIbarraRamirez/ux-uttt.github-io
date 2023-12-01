import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/services/clientes.service';
import { clientes } from '../../../interfaces/clientes';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.Component.html',
  styleUrls: ['./cliente.Component.scss']
})
export class ClientesComponent {
  listaClientes:clientes[] = [];


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
  constructor(private _clientesService:ClientesService){

  }
  ngOnInit():void{
    this.cargarClientes();
  }
  cargarClientes(){
    this.listaClientes = this._clientesService.getClientes();
    this.dataSource = new MatTableDataSource(this.listaClientes);
  }

  eliminarClientes(index: number){
    console.log(index);
    this._clientesService.eliminarClientes(index);
    this.cargarClientes();

  }
}
