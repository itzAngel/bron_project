import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/producto";
  producto:Producto = new Producto();

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
  createProducto(producto: Producto){
    return this.http.post<Producto>(this.Url,producto);
  }
  getProductoId(id: string){
    return this.http.get<Producto>(this.Url+"/"+id);
  }
  updatProducto(producto: Producto){
    return this.http.put<Producto>(this.Url,producto);
  }
  deleteProducto(id: string){
    return this.http.delete(this.Url + "/" + id);
  }

}
