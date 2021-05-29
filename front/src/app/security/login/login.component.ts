import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  usuario: Usuario = new Usuario();
  @Input() error: string | null;
  constructor(private router: Router, public service: AuthService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  check(){
    this.service.auth(this.username,this.password).subscribe(
      data => {
        this.usuario = data;
        if(this.usuario!=null){
          this.openSnackBar("Bienvenido " + this.usuario.nombre);
          this.router.navigate(['']);
          this.service.isLogged = true;
          localStorage.setItem('isLogged', JSON.stringify(this.service.isLogged));
        }else{
          this.openSnackBar("Usuario o contraseña incorrectos");
          this.service.isLogged = false;
        }
      },
      error => {
        this.openSnackBar("Usuario o contraseña incorrectos");
        this.service.isLogged = false;
      });
  }
}
