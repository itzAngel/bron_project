import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  categorias: Categoria[] = [];

  constructor(public dialog: MatDialog, public service: CategoriaService, private _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.limpiar();
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
  }

  validar() {
    if (this.categoria.categoria != null) {
      return true;
    } else {
      return false;
    }
  }

  Guardar(categoria: Categoria) {
    if (this.validar()) {
      this.service.createCategoria(categoria).subscribe(data => {
          this.openSnackBar("Categoria se agrego con exito");
          this.limpiar();
          this.router.navigate(['../listarCategoria'], {relativeTo: this.route}); //to navigate with sibling
      });
    } else {
      this.openSnackBar("Llena todos los campos de la categoria");
    }
  }
  
}
