import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProducto } from 'src/app/models/detalle-producto';
import { Producto } from 'src/app/models/producto';
import { DetalleProductoService } from 'src/app/services/detalle-producto.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-detalle-producto',
  templateUrl: './add-detalle-producto.component.html',
  styleUrls: ['./add-detalle-producto.component.css']
})
export class AddDetalleProductoComponent implements OnInit {

  detalleProducto: DetalleProducto = new DetalleProducto();
  detalleProductos: DetalleProducto[] = [];
  productos: Producto[] = [];
  constructor(public dialog: MatDialog, public productoservice: ProductoService, 
    private _snackBar: MatSnackBar,public router:Router, public service: DetalleProductoService
    , public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productoservice.getProductos().subscribe(data => {
      this.productos = data;
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
    this.detalleProducto = new DetalleProducto();
  }

  validar() {
    if (this.detalleProducto.producto != null && 
      this.detalleProducto.talla != null && this.detalleProducto.color != null && 
      this.detalleProducto.descripcion != null && this.detalleProducto.cantidad != null) {
      return true;
    } else {
      return false;
    }
  }

  Guardar(detalleProducto: DetalleProducto) {
    if (this.validar()) {
      this.service.createDetalleProducto(detalleProducto).subscribe(data => {
          this.openSnackBar("Detalle del Producto se agrego con exito");
          this.limpiar();
          this.router.navigate(['../listarDetalleProducto'], {relativeTo: this.route}); //to navigate with sibling
      });
    } else {
      this.openSnackBar("Llena todos los campos del Detalle de producto");
    }
  }

}
