import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { BaseComponent } from 'src/app/shared/base/base/base.component';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent extends BaseComponent implements OnInit {

  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];

  constructor(public service: ClienteService,public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute) {
    super(dialog,_snackBar,router,route);
  }
  ngOnInit(): void {
    this.service.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
  
  Editar(cliente: Cliente):void {
    this.service.cliente=cliente;
    this.router.navigate(['../editCliente'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(cliente: Cliente): void {
    this.service.deleteCliente(cliente.id_cliente).subscribe(data => {
      this.clientes = this.clientes.filter(p => p !== cliente);
      this.openSnackBar("Cliente se elimino con exito");
      },
      err => {
        this.openSnackBar("No se pudo eliminar el Cliente, probablemente esté siendo usado en otro modulo");
      }
    );
  }

}
