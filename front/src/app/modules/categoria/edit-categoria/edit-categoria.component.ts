import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  categorias: Categoria[] = [];

  constructor(public dialog: MatDialog, public service: CategoriaService,  private http: HttpClient,
    private _snackBar: MatSnackBar,public router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria = new Categoria();
    this.categoria = this.service.categoria;
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  limpiar() {
    this.categoria = new Categoria();
    this.service.categoria = new Categoria();
  }

  validar() {
    if (this.categoria.categoria != null) {
      return true;
    } else {
      return false;
    }
  }

  Actualizar() {
    if (this.validar()) {
      this.service.updateCategoria(this.categoria).subscribe(data => {
          this.openSnackBar("Categoria se actualizo con exito");
          this.router.navigate(['../listarCategoria'], {relativeTo: this.route}); //to navigate with sibling
          this.limpiar();
      });
    } else {
      this.openSnackBar("Llena todos los campos de la categoria");
    }
  }

  

}
