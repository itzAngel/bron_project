import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Imagen } from 'src/app/models/imagen';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { ProductoService } from 'src/app/services/producto.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';
interface Genero {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent extends BaseComponent implements OnInit {
  
  producto: Producto = new Producto();
  productos: Producto[] = [];
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  selectedCate: Categoria = new Categoria();
  categorias: Categoria[] = [];
  generos: Genero[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'Femenino'}
  ];
  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute, public service: ProductoService
    , public catservice: CategoriaService) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.catservice.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  limpiar() {
    this.producto = new Producto();
  }

  validar() {
    if (this.producto.modelo != null && 
      this.producto.genero != null && this.selectedCate != null && 
      this.producto.precio != null) {
      return true;
    } else {
      return false;
    }
  }

  Guardar(producto: Producto) {
    if (this.validar()) {
      this.service.createProducto(producto).subscribe(data => {
          this.openSnackBar("Producto se agrego con exito");
          this.limpiar();
          this.router.navigate(['../listarProducto'], {relativeTo: this.route}); //to navigate with sibling
      });
    } else {
      this.openSnackBar("Llena todos los campos del producto");
    }
  }

}
