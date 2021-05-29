import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/shared/base/base/base.component';
@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent extends BaseComponent implements OnInit {

  categoria: Categoria = new Categoria();
  categorias: Categoria[] = [];

  constructor(public service: CategoriaService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.service.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }
  
  Editar(categoria: Categoria):void {
    this.service.categoria=categoria;
    this.router.navigate(['../editCategoria'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(categoria: Categoria): void {
    this.service.deleteCategoria(categoria.id_categoria).subscribe(
      data => {
      this.categorias = this.categorias.filter(p => p !== categoria);
      this.openSnackBar("Categoria se elimino con exito");
      },
      err => {
        this.openSnackBar("No se pudo eliminar la Categoria, probablemente esté siendo usada en otro modulo");
      }
    );
  }
}
