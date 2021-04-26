package com.bron.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {
	@Id
    @Column(name = "CODIGOPRODUCTO", length = 45)
    private String codigoProducto;
    
    @Column(name = "MODELO", length = 45)
	private String modelo;
    
    @Column(name = "TALLA")
	private int talla;

    @Column(name = "COLOR", length = 45)
	private String color;

    @Column(name = "GENERO", length = 45)
	private String genero;
    
    @Column(name = "MARCA", length = 45)
	private String marca;
    
    @Column(name = "PRECIO")
	private double precio;
    
    @Column(name = "CANTIDAD")
	private int cantidad;

	public Producto() {
		super();
	}

	public Producto(String codigoProducto, String modelo, int talla, String color, String genero, String marca,
			double precio, int cantidad) {
		super();
		this.codigoProducto = codigoProducto;
		this.modelo = modelo;
		this.talla = talla;
		this.color = color;
		this.genero = genero;
		this.marca = marca;
		this.precio = precio;
		this.cantidad = cantidad;
	}

	public String getCodigoProducto() {
		return codigoProducto;
	}

	public void setCodigoProducto(String codigoProducto) {
		this.codigoProducto = codigoProducto;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
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

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
    
}
