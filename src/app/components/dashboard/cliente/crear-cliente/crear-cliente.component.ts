import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from '../../../../services/clientes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit{

  form: FormGroup

  constructor(private fb: FormBuilder,
    private _clientesService: ClientesService,
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
  agregarClientes(){
    const user: clientes={
      position:0,
      nombre:this.form.value.nombre,
      correo:this.form.value.correo,
      tipo:this.form.value.tipo,
      role:this.form.value.role,
      idioma:this.form.value.idioma
    }
    this._clientesService.agregarClientes(user);
    this.router.navigate(['dashboard/cliente']);
    /*
    this._snackBar.open('El usuario fue creado satisfactoriamente','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
    */
  }
}
