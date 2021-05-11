import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/usuario";
  usuario: Usuario = new Usuario();
  
  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }
  createUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.Url,usuario);
  }
  getUsuarioId(id: number){
    return this.http.get<Usuario>(this.Url+"/"+id);
  }
  updateUsuario(usuario: Usuario){
    return this.http.put<Usuario>(this.Url,usuario);
  }
  deleteUsuario(id: number){
    return this.http.delete(this.Url + "/" + id);
  }

}
