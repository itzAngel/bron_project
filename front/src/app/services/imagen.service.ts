import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/imagen";
  imagen:Imagen = new Imagen();

  constructor(private http:HttpClient) { }

  getImagenes(){
    return this.http.get<Imagen[]>(this.Url);
  }
  createImagen(imagen: Imagen){
    return this.http.post<Imagen>(this.Url,imagen);
  }
  getImagenId(id: number){
    return this.http.get<Imagen>(this.Url+"/"+id);
  }
  updatImagen(imagen: Imagen){
    return this.http.put<Imagen>(this.Url,imagen);
  }
  deleteImagen(id: number){
    return this.http.delete(this.Url + "/" + id);
  }
}
