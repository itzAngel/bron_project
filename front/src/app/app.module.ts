import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { DefaultComponent } from './modules/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AddCategoriaComponent } from './modules/categoria/add-categoria/add-categoria.component';
import { ListarCategoriaComponent } from './modules/categoria/listar-categoria/listar-categoria.component';
import { EditCategoriaComponent } from './modules/categoria/edit-categoria/edit-categoria.component';
import { EditProductoComponent } from './modules/producto/edit-producto/edit-producto.component';
import { AddProductoComponent } from './modules/producto/add-producto/add-producto.component';
import { ListarProductoComponent } from './modules/producto/listar-producto/listar-producto.component';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { ClienteService } from './services/cliente.service';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddClienteComponent } from './modules/cliente/add-cliente/add-cliente.component';
import { ListarClienteComponent } from './modules/cliente/listar-cliente/listar-cliente.component';
import { EditClienteComponent } from './modules/cliente/edit-cliente/edit-cliente.component';
import { AddUsuarioComponent } from './modules/usuario/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './modules/usuario/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './modules/usuario/edit-usuario/edit-usuario.component';
import { AddDetalleProductoComponent } from './modules/detalleProducto/add-detalle-producto/add-detalle-producto.component';
import { ListarDetalleProductoComponent } from './modules/detalleProducto/listar-detalle-producto/listar-detalle-producto.component';
import { EditDetalleProductoComponent } from './modules/detalleProducto/edit-detalle-producto/edit-detalle-producto.component';
import { AddImagenComponent } from './modules/media/imagen/add-imagen/add-imagen.component';
import { ListarImagenComponent } from './modules/media/imagen/listar-imagen/listar-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DefaultComponent,
    HomeComponent,
    AddCategoriaComponent,
    ListarCategoriaComponent,
    EditCategoriaComponent,
    EditProductoComponent,
    AddProductoComponent,
    ListarProductoComponent,
    AddClienteComponent,
    ListarClienteComponent,
    EditClienteComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
    AddDetalleProductoComponent,
    ListarDetalleProductoComponent,
    EditDetalleProductoComponent,
    AddImagenComponent,
    ListarImagenComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriaService,
    ProductoService,
    ClienteService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
