import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProducto } from 'src/app/models/detalle-producto';
import { DetalleProductoService } from 'src/app/services/detalle-producto.service';
import { ProductoService } from 'src/app/services/producto.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-listar-detalle-producto',
  templateUrl: './listar-detalle-producto.component.html',
  styleUrls: ['./listar-detalle-producto.component.css']
})
export class ListarDetalleProductoComponent extends BaseComponent implements OnInit {

  detalleProducto: DetalleProducto = new DetalleProducto();
  detalleProductos: DetalleProducto[] = [];

  constructor(public service: DetalleProductoService, public productoservice: ProductoService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.service.getDetalleProductos().subscribe(data => {
      this.detalleProductos = data;
    });
  }
  
  Editar(producto: DetalleProducto):void {
    this.service.detalleProducto=producto;
    this.router.navigate(['../editDetalleProducto'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(detalleProducto: DetalleProducto): void {
    this.service.deleteDetalleProducto(detalleProducto.id_detalle_producto).subscribe(data => {
      this.detalleProductos = this.detalleProductos.filter(p => p !== detalleProducto);
      this.openSnackBar("Detalle de Producto se elimino con exito");
      },
      err => {
        this.openSnackBar("No se pudo eliminar el Detalle de Producto, probablemente esté siendo usado en otro modulo");
      }
    );
    
  }

}
