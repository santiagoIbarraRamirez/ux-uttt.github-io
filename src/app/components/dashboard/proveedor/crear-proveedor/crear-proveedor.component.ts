import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from '../../../../services/proveedor.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.scss']
})
export class CrearProveedorComponent implements OnInit{

  form: FormGroup

  constructor(private fb: FormBuilder,
    private _proveedorService: ProveedorService,
    private router: Router,
    private _snackBar: MatSnackBar
    ){
    this.form = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
      nombre:['', Validators.required],
      correo:['', Validators.required],
      tipo:['', Validators.required],
      role:['', Validators.required],
      idioma:['', Validators.required]
    })
  }
  ngOnInit(): void {

  }
  agregarProveedor(){
    const user: proveedor={
      position:0,
      nombre:this.form.value.nombre,
      correo:this.form.value.correo,
      tipo:this.form.value.tipo,
      role:this.form.value.role,
      idioma:this.form.value.idioma
    }
    this._proveedorService.agregarProveedor(user);
    this.router.navigate(['dashboard/proveedor']);
  }
}
