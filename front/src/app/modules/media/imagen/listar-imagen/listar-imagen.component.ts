import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from 'src/app/models/imagen';
import { ImagenService } from 'src/app/services/imagen.service';
import { ProductoService } from 'src/app/services/producto.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent extends BaseComponent implements OnInit {
  imagen: File;
  listaImagenes: Imagen[] = [];
  constructor(public imgservice: ImagenService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute, public productoservice: ProductoService) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.imgservice.getImagenes().subscribe(data => {
      this.listaImagenes = data;
      this.listaImagenes.forEach(element => {
        element.base64 = 'data:image/jpg;base64,' + element.base64;
      });
    });
  }

  Eliminar(imag: Imagen): void {
    this.imgservice.deleteImagen(imag.id_imagen).subscribe(data => {
      this.listaImagenes = this.listaImagenes.filter(p => p !== imag);
      this.openSnackBar("Imagen se elimino con exito");
      },
      err => {
        this.openSnackBar("No se pudo eliminar la Imagen, probablemente esté siendo usada en otro modulo");
      }
    );
  }

}
