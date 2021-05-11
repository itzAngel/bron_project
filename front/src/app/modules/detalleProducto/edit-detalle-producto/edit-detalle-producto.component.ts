import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProducto } from 'src/app/models/detalle-producto';
import { Producto } from 'src/app/models/producto';
import { DetalleProductoService } from 'src/app/services/detalle-producto.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-edit-detalle-producto',
  templateUrl: './edit-detalle-producto.component.html',
  styleUrls: ['./edit-detalle-producto.component.css']
})
export class EditDetalleProductoComponent implements OnInit {

  detalleProducto: DetalleProducto = new DetalleProducto();
  detalleProductos: DetalleProducto[] = [];
  productos: Producto[] = [];
  constructor(public dialog: MatDialog, public service: DetalleProductoService,  private http: HttpClient,
    private _snackBar: MatSnackBar,public router:Router, public route: ActivatedRoute, public prodservice: ProductoService) { }

  ngOnInit(): void {
    this.detalleProducto = new DetalleProducto();
    this.detalleProducto = this.service.detalleProducto;
    this.prodservice.getProductos().subscribe(data => {
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
    this.service.detalleProducto = new DetalleProducto();
  }

  validar() {
    if (this.detalleProducto.cantidad != null && 
      this.detalleProducto.color != null && this.detalleProducto.producto != null && 
      this.detalleProducto.talla != null) {
      return true;
    } else {
      return false;
    }
  }

  Actualizar() {
    if (this.validar()) {
      this.service.updatDetalleProducto(this.detalleProducto).subscribe(data => {
          this.openSnackBar("Detalle producto se actualizo con exito");
          this.router.navigate(['../listarDetalleProducto'], {relativeTo: this.route}); //to navigate with sibling
          this.limpiar();
      });
    } else {
      this.openSnackBar("Llena todos los campos del detalle de producto");
    }
  }

}
