import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent extends BaseComponent implements OnInit {

  categoria: Categoria = new Categoria();
  categorias: Categoria[] = [];
  
  constructor(public service: CategoriaService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.categoria = new Categoria();
    this.categoria = this.service.categoria;
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
