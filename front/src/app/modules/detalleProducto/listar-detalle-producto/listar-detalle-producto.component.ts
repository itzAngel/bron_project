import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProducto } from 'src/app/models/detalle-producto';
import { DetalleProductoService } from 'src/app/services/detalle-producto.service';

@Component({
  selector: 'app-listar-detalle-producto',
  templateUrl: './listar-detalle-producto.component.html',
  styleUrls: ['./listar-detalle-producto.component.css']
})
export class ListarDetalleProductoComponent implements OnInit {

  detalleProducto: DetalleProducto = new DetalleProducto();
  detalleProductos: DetalleProducto[] = [];

  constructor(public dialog: MatDialog, public service: DetalleProductoService,
    private _snackBar: MatSnackBar,private router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getDetalleProductos().subscribe(data => {
      this.detalleProductos = data;
    });
  }
  
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
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
