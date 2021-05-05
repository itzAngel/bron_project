package com.bron.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "detalle_productos")
public class DetalleProducto implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @Column(name = "CODIGODETALLE", length = 45)
    private String codigoDetalle;
	
	@ManyToOne()
    @JoinColumn(name = "CODIGOPRODUCTO")
    private Producto producto;
    
    @Column(name = "TALLA")
	private int talla;

    @Column(name = "COLOR", length = 45)
	private String color;
    
    @Column(name = "DESCRIPCION", length = 45)
	private String descripcion;
    
    @Column(name = "CANTIDAD")
	private int cantidad;

	public DetalleProducto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DetalleProducto(String codigoDetalle, Producto producto, int talla, String color, String descripcion,
			int cantidad) {
		super();
		this.codigoDetalle = codigoDetalle;
		this.producto = producto;
		this.talla = talla;
		this.color = color;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
	}

	public String getCodigoDetalle() {
		return codigoDetalle;
	}

	public void setCodigoDetalle(String codigoDetalle) {
		this.codigoDetalle = codigoDetalle;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public int getTalla() {
		return talla;
	}

	public void setTalla(int talla) {
		this.talla = talla;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
    
    
    
}
