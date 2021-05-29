import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProducto } from 'src/app/models/detalle-producto';
import { Producto } from 'src/app/models/producto';
import { DetalleProductoService } from 'src/app/services/detalle-producto.service';
import { ProductoService } from 'src/app/services/producto.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-add-detalle-producto',
  templateUrl: './add-detalle-producto.component.html',
  styleUrls: ['./add-detalle-producto.component.css']
})
export class AddDetalleProductoComponent extends BaseComponent implements OnInit {

  detalleProducto: DetalleProducto = new DetalleProducto();
  detalleProductos: DetalleProducto[] = [];
  productos: Producto[] = [];
  constructor(public service: DetalleProductoService, public productoservice: ProductoService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.productoservice.getProductos().subscribe(data => {
      this.productos = data;
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
