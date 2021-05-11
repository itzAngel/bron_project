import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  productos: Producto[] = [];

  constructor(public dialog: MatDialog, public service: ProductoService,
    private _snackBar: MatSnackBar,private router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProductos().subscribe(data => {
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
  
  Editar(producto: Producto):void {
    this.service.producto=producto;
    this.router.navigate(['../editProducto'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(producto: Producto): void {
    this.service.deleteProducto(producto.id_producto).subscribe(data => {
      this.productos = this.productos.filter(p => p !== producto);
    });
    this.openSnackBar("Producto se elimino con exito");
  }

}
