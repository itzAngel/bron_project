import { Categoria } from "./categoria";
import { DetalleProducto } from "./detalle-producto";

export class Producto {
    id_producto: number = null;
	modelo: string = null;
	genero: string = null;
    precio: number = null;
    categoria: Categoria = new Categoria();
}
