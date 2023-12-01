import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-roles',
  templateUrl: './crear-roles.component.html',
  styleUrls: ['./crear-roles.component.scss']
})
export class CrearRolesComponent implements OnInit{

  form: FormGroup

  constructor(private fb: FormBuilder,private router: Router){this.form = this.fb.group({ })}
  ngOnInit(): void {}

  agregarRol(){this.router.navigate(['dashboard/roles']);}

}
