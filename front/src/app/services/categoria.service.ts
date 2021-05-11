import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/categoria";
  categoria:Categoria = new Categoria();
  constructor(public http:HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(this.Url);
  }
  createCategoria(categoria: Categoria){
    return this.http.post<Categoria>(this.Url,categoria);
  }
  getCategoriaId(id: number){
    return this.http.get<Categoria>(this.Url+"/"+id);
  }
  updateCategoria(categoria: Categoria){
    return this.http.put<Categoria>(this.Url,categoria);
  }
  deleteCategoria(id: number){
    return this.http.delete(this.Url + "/" + id);
  }
}
