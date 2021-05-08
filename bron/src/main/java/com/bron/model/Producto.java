package com.bron.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "producto")
public class Producto implements Serializable{
	
	
	/** La Constant serialVersionUID. */
    private static final long serialVersionUID = 1L;

    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    private int id_producto;
	@Column
	private String modelo;
	@Column
	private String genero;
	@Column
	private double precio;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_categoria", referencedColumnName = "id_categoria")
    private Categoria categoria;
	
	@OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    private List<DetalleProducto> detalleproductoList = new ArrayList<>();

	public int getId_producto() {
		return id_producto;
	}

	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
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

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}
	@JsonBackReference
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	@JsonManagedReference
	public List<DetalleProducto> getDetalleproductoList() {
		return detalleproductoList;
	}

	public void setDetalleproductoList(List<DetalleProducto> detalleproductoList) {
		this.detalleproductoList = detalleproductoList;
	}
	
	
}
