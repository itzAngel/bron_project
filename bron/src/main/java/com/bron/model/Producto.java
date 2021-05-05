package com.bron.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @Column(name = "CODIGOPRODUCTO", length = 45)
    private String codigoProducto;
    
    @Column(name = "MODELO", length = 45)
	private String modelo;

    @Column(name = "GENERO", length = 45)
	private String genero;
    
    @ManyToOne()
    @JoinColumn(name = "CODIGO_CATEGORIA", nullable = true)
    private Categoria categoria;
    
    @Column(name = "PRECIO")
	private double precio;
    
    @OneToMany(mappedBy = "producto",cascade = CascadeType.ALL)
    private List<DetalleProducto> listaDetalleProducto = new ArrayList<>();

	public Producto() {
		super();
	}

	public Producto(String codigoProducto, String modelo, String genero, Categoria categoria, double precio,
			List<DetalleProducto> listaDetalleProducto) {
		super();
		this.codigoProducto = codigoProducto;
		this.modelo = modelo;
		this.genero = genero;
		this.categoria = categoria;
		this.precio = precio;
		this.listaDetalleProducto = listaDetalleProducto;
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

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

}
