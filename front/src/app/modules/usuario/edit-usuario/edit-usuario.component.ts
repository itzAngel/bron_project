import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(public dialog: MatDialog, public service: UsuarioService,  private http: HttpClient,
    private _snackBar: MatSnackBar,public router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuario = this.service.usuario;
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
    this.service.usuario = new Usuario();
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

  Actualizar() {
    if (this.validar()) {
      this.service.updateUsuario(this.usuario).subscribe(data => {
          this.openSnackBar("Cliente se actualizo con exito");
          this.router.navigate(['../listarUsuario'], {relativeTo: this.route}); //to navigate with sibling
          this.limpiar();
      });
    } else {
      this.openSnackBar("Llena todos los campos del usuario");
    }
  }

}
