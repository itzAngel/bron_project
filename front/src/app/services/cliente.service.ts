import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  enviroment : CoreEnvironment; 
  urlbase = environment.url;
  Url=this.urlbase + "/cliente";  
  cliente: Cliente = new Cliente();

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }
  createCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.Url,cliente);
  }
  getClienteId(id: string){
    return this.http.get<Cliente>(this.Url+"/"+id);
  }
  updatCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.Url,cliente);
  }
  deleteCliente(id: string){
    return this.http.delete(this.Url + "/" + id);
  }

}
