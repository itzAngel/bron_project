import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Imagen } from 'src/app/models/imagen';
import { Producto } from 'src/app/models/producto';
import { ImagenService } from 'src/app/services/imagen.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  producto: Producto = new Producto();
  imagenes: Imagen[] = [];
  constructor(public dialog: MatDialog, public service: ImagenService) { }

  ngOnInit(): void {
    this.service.getImagenes().subscribe(data => {
      this.imagenes = data;
      this.imagenes.forEach(element => {
        element.base64 = 'data:image/jpg;base64,' + element.base64;
      });
    });
  }

}
