import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(public dialog: MatDialog, public service: UsuarioService,
    private _snackBar: MatSnackBar,private router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  
  Editar(usuario: Usuario):void {
    this.service.usuario=usuario;
    this.router.navigate(['../editUsuario'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(usuario: Usuario): void {
    this.service.deleteUsuario(usuario.dniUsuario).subscribe(data => {
      this.usuarios = this.usuarios.filter(p => p !== usuario);
    });
    this.openSnackBar("Usuario se elimino con exito");
  }

}
