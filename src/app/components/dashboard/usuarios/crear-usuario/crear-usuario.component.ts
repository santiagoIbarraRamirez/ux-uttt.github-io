import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit{

  form: FormGroup

  constructor(private fb: FormBuilder,
    private _usuariosService: UsuariosService,
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
  agregarUsuario(){
    const user: usuarios={
      position:0,
      nombre:this.form.value.nombre,
      correo:this.form.value.correo,
      tipo:this.form.value.tipo,
      role:this.form.value.role,
      idioma:this.form.value.idioma
    }
    this._usuariosService.agregarUsuario(user);
    this.router.navigate(['dashboard/usuarios']);
    /*
    this._snackBar.open('El usuario fue creado satisfactoriamente','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
    */
  }
}
