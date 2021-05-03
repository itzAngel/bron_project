import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];

  constructor(public dialog: MatDialog, public service: ClienteService,
    private _snackBar: MatSnackBar,private router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
  
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  
  Editar(cliente: Cliente):void {
    this.service.cliente=cliente;
    this.router.navigate(['../editCliente'], {relativeTo: this.route}); //to navigate with sibling
  }

  Eliminar(cliente: Cliente): void {
    this.service.deleteCliente(cliente.dniCliente).subscribe(data => {
      this.clientes = this.clientes.filter(p => p !== cliente);
    });
    this.openSnackBar("Cliente se elimino con exito");
  }

}
