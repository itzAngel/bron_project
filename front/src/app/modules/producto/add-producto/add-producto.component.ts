import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
interface Genero {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  producto: Producto = new Producto();
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  generos: Genero[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'Femenino'}
  ];
  constructor(public dialog: MatDialog, public service: ProductoService, 
    private _snackBar: MatSnackBar,public router:Router, public catservice: CategoriaService) { }

  ngOnInit(): void {
    this.catservice.getCategorias().subscribe(data => {
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

  limpiar() {
    this.producto = new Producto();
  }

  validar() {
    if (this.producto.codigoProducto != null && this.producto.modelo != null && 
      this.producto.talla != null && this.producto.color != null && 
      this.producto.genero != null && this.producto.categoria != null && 
      this.producto.precio != null && this.producto.cantidad != null) {
      return true;
    } else {
      return false;
    }
  }

  Guardar(producto: Producto) {
    if (this.validar()) {
      this.service.createProducto(producto).subscribe(data => {
          this.openSnackBar("Categoria se agrego con exito");
          this.limpiar();
          this.router.navigate(['listarCategoria']);
      });
    } else {
      this.openSnackBar("Llena todos los campos de la categoria");
    }
  }

}
