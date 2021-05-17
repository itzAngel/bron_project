import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
interface Nav {
  link: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  ngOnInit(): void {
  }
  listaNavegacion: Nav[] = [
    {link: 'addUsuario', viewValue: 'Agregar Usuario'},
    {link: 'listarUsuario', viewValue: 'Listar Usuario'},
    {link: 'editUsuario', viewValue: 'Editar Usuario'},
    {link: 'addCliente', viewValue: 'Agregar Cliente'},
    {link: 'listarCliente', viewValue: 'Listar Cliente'},
    {link: 'editCliente', viewValue: 'Editar Cliente'},
    {link: 'addCategoria', viewValue: 'Agregar Categoría'},
    {link: 'listarCategoria', viewValue: 'Listar Categoría'},
    {link: 'editCategoria', viewValue: 'Editar Categoría'},
    {link: 'addProducto', viewValue: 'Agregar Producto'},
    {link: 'listarProducto', viewValue: 'Listar Producto'},
    {link: 'editProducto', viewValue: 'Editar Producto'},
    {link: 'addDetalleProducto', viewValue: 'Agregar Detalle de Producto'},
    {link: 'listarDetalleProducto', viewValue: 'Listar Detalle de Producto'},
    {link: 'editDetalleProducto', viewValue: 'Editar Detalle de Producto'},
    {link: 'addImagen', viewValue: 'Agregar Imagen'},
    {link: 'listarImagen', viewValue: 'Listar Imagenes'},
  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
