import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router:Router){
    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]

    })
  }

  ngOnInit(): void {
      
  }
  ingresar(){
    const usr = this.form.value.usuario;
    const pwd = this.form.value.password;
    if (usr=="admin" && pwd=="password123$"){
      //redireccionar al Main
      this.loadDashboard();
      
    }else{
      this.error();
    }
  }

  error(){
    this._snackBar.open('login invalido','',{
      duration:2000,
      horizontalPosition: 'center',
      verticalPosition:'top'
      
    });
  }
  loadDashboard(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
