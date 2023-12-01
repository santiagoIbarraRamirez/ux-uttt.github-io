import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { viaje } from 'src/app/interfaces/viaje';
import { ViajeService } from '../../../../services/viaje.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss']
})
export class CrearViajeComponent implements OnInit{

  form: FormGroup

  constructor(private fb: FormBuilder,
    private _viajeService: ViajeService,
    private router: Router,
    private _snackBar: MatSnackBar
    ){
    this.form = this.fb.group({
      nombreCliente:['', Validators.required],
      precio:['', Validators.required],
      origen:['', Validators.required]
    })
  }
  ngOnInit(): void {

  }
  agregarViaje(){
    let numberV = Math.floor(Math.random() * (100000 - 9999 + 1) ) + 99;
    let numberTel = Math.floor(Math.random() * (1000000 - 999999 + 1) ) + 9958;

    const user: viaje={
      position:"v" + numberV ,
      nombreCliente:this.form.value.nombreCliente,
      correo:this.form.value.nombreCliente + "@gmail.com",
      Contacto1:"5685" + numberTel,
      precio:this.form.value.precio,
      origen:this.form.value.origen
    }
    this._viajeService.agregarViaje(user);
    this.router.navigate(['dashboard/viaje']);
  }
}
