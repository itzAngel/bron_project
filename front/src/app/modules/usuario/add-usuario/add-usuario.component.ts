import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent extends BaseComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute, public service: UsuarioService) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
  }

  limpiar() {
    this.usuario = new Usuario();
  }

  validar() {
    if (this.usuario.dni_usuario != null && this.usuario.nombre != null &&  this.usuario.apellido != null && 
      this.usuario.email != null && this.usuario.privilegio != null 
      && this.usuario.contrasena) {
      return true;
    } else {
      return false;
    }
  }

  Guardar(usuario: Usuario) {
    if (this.validar()) {
      this.service.createUsuario(usuario).subscribe(data => {
          this.openSnackBar("Usuario se agrego con exito");
          this.limpiar();
          this.router.navigate(['../listarUsuario'], {relativeTo: this.route}); //to navigate with sibling
      });
    } else {
      this.openSnackBar("Llena todos los campos del usuario");
    }
  }

}
