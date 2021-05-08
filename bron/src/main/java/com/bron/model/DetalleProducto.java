package com.bron.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "detalle_producto")
public class DetalleProducto implements Serializable{
	
	
	/** La Constant serialVersionUID. */
    private static final long serialVersionUID = 1L;

    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    private int id_detalle_producto;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    private Producto producto;
	
	@Column
	private int talla;
	
	@Column
	private String color;
	
	@Column
	private String descripcion;
	
	@Column
	private int cantidad;

	public int getId_detalle_producto() {
		return id_detalle_producto;
	}

	public void setId_detalle_producto(int id_detalle_producto) {
		this.id_detalle_producto = id_detalle_producto;
	}
	
	@JsonBackReference
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
