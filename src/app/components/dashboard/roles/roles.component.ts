import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { roles } from 'src/app/interfaces/roles';
import { RolesService } from '../../../services/roles.service';





@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  listaRoles:roles[] = [];


  displayedColumns: string[] = ['position', 'role', 'alcance', 'permisos', 'acciones'];
  
  //dataSource = new MatTableDataSource(this.listaRoles);
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
  constructor(private _rolesService:RolesService){

  }
  ngOnInit():void{
    this.cargarRoles();
  }
  cargarRoles(){
    this.listaRoles = this._rolesService.getRoles();
    this.dataSource = new MatTableDataSource(this.listaRoles);
  }

  eliminarRole(index: number){
    console.log(index);
    this._rolesService.eliminarRole(index);
    this.cargarRoles();
  }
}
