import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  categorias: Categoria[] = [];

  constructor(public dialog: MatDialog, public service: CategoriaService,
    private _snackBar: MatSnackBar,private router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }
  
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  
  Editar(categoria: Categoria):void {
    this.service.categoria=categoria;
    console.log(this.service.categoria);
    this.router.navigate(['../editCategoria'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(categoria: Categoria): void {
    this.service.deleteCategoria(categoria.codigoCategoria).subscribe(data => {
      this.categorias = this.categorias.filter(p => p !== categoria);
    });
    this.openSnackBar("Categoria se elimino con exito");
  }
}
