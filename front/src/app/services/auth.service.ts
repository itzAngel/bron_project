import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/usuario/login";
  isLogged:boolean = false;
  constructor(public http:HttpClient) { }

  auth(user: string, pass: string){
    return this.http.get<Usuario>(this.Url+"/"+user+"/"+pass);
  }
}
