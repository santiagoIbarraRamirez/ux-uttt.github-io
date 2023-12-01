import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from '../../../interfaces/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  listaUsuarios:usuarios[] = [];


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
  constructor(private _usuariosService:UsuariosService){

  }
  ngOnInit():void{
    this.cargarUsuarios();
  }
  cargarUsuarios(){
    this.listaUsuarios = this._usuariosService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

  eliminarUsuario(index: number){
    console.log(index);
    this._usuariosService.eliminarUsuario(index);
    this.cargarUsuarios();
    
  }
}
