import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(public dialog: MatDialog, public service: UsuarioService, private _snackBar: MatSnackBar,
    public router:Router) { }

  ngOnInit(): void {
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  limpiar() {
    this.usuario = new Usuario();
  }

  validar() {
    if (this.usuario.dniUsuario != null && this.usuario.nombre != null &&  this.usuario.apellido != null && 
      this.usuario.email != null && this.usuario.privilegio != null && this.usuario.idUsuario != null 
      && this.usuario.contrasena) {
      return true;
    } else {
      return false;
    }
  }

  Guardar(usuario: Usuario) {
    if (this.validar()) {
      this.service.createUsuario(usuario).subscribe(data => {
          this.openSnackBar("Categoria se agrego con exito");
          this.limpiar();
          this.router.navigate(['listarUsuario']);
      });
    } else {
      this.openSnackBar("Llena todos los campos del usuario");
    }
  }

}
