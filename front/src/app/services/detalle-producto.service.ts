import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleProducto } from '../models/detalle-producto';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {

  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/detalleproducto";
  detalleProducto:DetalleProducto = new DetalleProducto();

  constructor(private http:HttpClient) { }

  getDetalleProductos(){
    return this.http.get<DetalleProducto[]>(this.Url);
  }
  createDetalleProducto(detalleProducto: DetalleProducto){
    return this.http.post<DetalleProducto>(this.Url,detalleProducto);
  }
  getDetalleProductoId(id: number){
    return this.http.get<DetalleProducto>(this.Url+"/"+id);
  }
  updatDetalleProducto(detalleProducto: DetalleProducto){
    return this.http.put<DetalleProducto>(this.Url,detalleProducto);
  }
  deleteDetalleProducto(id: number){
    return this.http.delete(this.Url + "/" + id);
  }
}
