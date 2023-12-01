import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { proveedor } from '../../../interfaces/proveedor';

@Component({
  selector: 'app-cliente',
  templateUrl: './proveedor.Component.html',
  styleUrls: ['./proveedor.Component.scss']
})
export class ProveedorComponent {
  listaProveedor:proveedor[] = [];


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
  constructor(private _proveedorService:ProveedorService){

  }
  ngOnInit():void{
    this.cargarProveeedor();
  }
  cargarProveeedor(){
    this.listaProveedor = this._proveedorService.getProveedor();
    this.dataSource = new MatTableDataSource(this.listaProveedor);
  }

  eliminarProveedor(index: number){
    console.log(index);
    this._proveedorService.eliminarProveedor(index);
    this.cargarProveeedor();

  }
}
