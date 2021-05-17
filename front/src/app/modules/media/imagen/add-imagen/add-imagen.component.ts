import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from 'src/app/models/imagen';
import { Producto } from 'src/app/models/producto';
import { ImagenService } from 'src/app/services/imagen.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.component.html',
  styleUrls: ['./add-imagen.component.css']
})
export class AddImagenComponent implements OnInit {
  imagen: File;
  img:Imagen = new Imagen();
  base64DefaultURL: string;
  selectedProduct: Producto = new Producto();
  productos: Producto[] = [];
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar,public router:Router,
    public route: ActivatedRoute, public imgservice: ImagenService, public productoservice: ProductoService) { }

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
  validar() {
    if (this.img.producto != null && this.imagen != null) {
      return true;
    } else {
      return false;
    }
  }

  Subir(){
    if(this.validar()){
      this.img.base64 = this.base64DefaultURL;
      this.img.contentType = "image/jpeg";
      this.imgservice.createImagen(this.img).subscribe(
        data => {
          this.openSnackBar("Imagen se subió con exito");
          this.router.navigate(['../listarImagen'], {relativeTo: this.route}); //to navigate with sibling
        },
        err => {
          this.reset();
        }
      );
    }else{
      this.openSnackBar("Existe un error, no se subió la imagen");
    }
  }
  reset(): void {
    this.imagen = null;
  }

  getFiles(event) {
    this.imagen = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.imagen[0]);
  }

  _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.base64DefaultURL = btoa(binaryString); 
  }
}
