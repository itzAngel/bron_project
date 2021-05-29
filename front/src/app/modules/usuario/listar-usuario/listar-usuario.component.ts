import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent extends BaseComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute, public service: UsuarioService) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  
  Editar(usuario: Usuario):void {
    this.service.usuario=usuario;
    this.router.navigate(['../editUsuario'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(usuario: Usuario): void {
    this.service.deleteUsuario(usuario.id_usuario).subscribe(data => {
      this.usuarios = this.usuarios.filter(p => p !== usuario);
      this.openSnackBar("Usuario se elimino con exito");
      },
      err => {
        this.openSnackBar("No se pudo eliminar el Usuario, probablemente esté siendo usado en otro modulo");
      }
    );
  }

}
