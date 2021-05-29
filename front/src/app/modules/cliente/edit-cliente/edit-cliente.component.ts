import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent extends BaseComponent implements OnInit {

  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];

  constructor(public service: ClienteService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente = this.service.cliente;
  }

  limpiar() {
    this.cliente = new Cliente();
    this.service.cliente = new Cliente();
  }

  validar() {
    if (this.cliente.dni_cliente != null && this.cliente.nombre != null &&  this.cliente.apellido != null && 
      this.cliente.telefono != null && this.cliente.provincia != null && this.cliente.distrito != null && 
      this.cliente.direccion != null && this.cliente.contrasena) {
      return true;
    } else {
      return false;
    }
  }

  Actualizar() {
    if (this.validar()) {
      this.service.updatCliente(this.cliente).subscribe(data => {
          this.openSnackBar("Cliente se actualizo con exito");
          this.router.navigate(['../listarCliente'], {relativeTo: this.route}); //to navigate with sibling
          this.limpiar();
      });
    } else {
      this.openSnackBar("Llena todos los campos del cliente");
    }
  }

}
