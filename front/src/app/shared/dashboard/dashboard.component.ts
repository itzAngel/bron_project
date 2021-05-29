import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseComponent } from '../base/base/base.component';
interface Nav {
  link: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit,OnDestroy {

  ngOnInit(): void {
    this.checkLogin();
  }
  listaNavegacion: Nav[] = [
    {link: 'listarUsuario', viewValue: 'Modulo Usuario'},
    {link: 'listarCliente', viewValue: 'Modulo Cliente'},
    {link: 'listarCategoria', viewValue: 'Modulo Categoría'},
    {link: 'listarProducto', viewValue: 'Modulo Producto'},
    {link: 'listarDetalleProducto', viewValue: 'Modulo Detalle de Producto'},
    {link: 'listarImagen', viewValue: 'Modulo Imagenes'},
  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar,
    public router:Router, public route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public auth:AuthService) {
    super(dialog,_snackBar,router,route);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  cerrarSesion(){
    localStorage.removeItem('isLogged');
    location.reload();
  }
}
