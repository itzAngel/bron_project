import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent extends BaseComponent implements OnInit {

  producto: Producto = new Producto();
  productos: Producto[] = [];
  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute, public service: ProductoService
    , public catservice: CategoriaService) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.service.getProductos().subscribe(data => {
      this.productos = data;
    });
  }
  
  Editar(producto: Producto):void {
    this.service.producto=producto;
    this.router.navigate(['../editProducto'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(producto: Producto): void {
    this.service.deleteProducto(producto.id_producto).subscribe(data => {
      this.productos = this.productos.filter(p => p !== producto);
      this.openSnackBar("Producto se elimino con exito");
      },
      err => {
        this.openSnackBar("No se pudo eliminar el Producto, probablemente esté siendo usado en otro modulo");
      }
    );
    
  }

}
