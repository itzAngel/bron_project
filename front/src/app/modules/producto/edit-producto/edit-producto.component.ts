import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
interface Genero {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto: Producto = new Producto();
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  generos: Genero[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'Femenino'}
  ];
  constructor(public dialog: MatDialog, public service: ProductoService,  private http: HttpClient,
    private _snackBar: MatSnackBar,public router:Router, public route: ActivatedRoute, public catservice: CategoriaService) { }

  ngOnInit(): void {
    this.producto = new Producto();
    this.producto = this.service.producto;
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
    this.service.producto = new Producto();
  }

  validar() {
    if (this.producto.modelo != null && 
      this.producto.genero != null && this.producto.categoria != null && 
      this.producto.precio != null) {
      return true;
    } else {
      return false;
    }
  }

  Actualizar() {
    if (this.validar()) {
      this.service.updatProducto(this.producto).subscribe(data => {
          this.openSnackBar("Producto se actualizo con exito");
          this.router.navigate(['../listarProducto'], {relativeTo: this.route}); //to navigate with sibling
          this.limpiar();
      });
    } else {
      this.openSnackBar("Llena todos los campos del producto");
    }
  }

}
