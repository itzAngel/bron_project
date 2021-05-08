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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "categoria")
public class Categoria implements Serializable{

	
	/** La Constant serialVersionUID. */
    private static final long serialVersionUID = 1L;
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_categoria;
    
	@Column
	private String categoria;
	
    @OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY)
    private List<Producto> productoList = new ArrayList<>();

	public int getId_categoria() {
		return id_categoria;
	}

	public void setId_categoria(int id_categoria) {
		this.id_categoria = id_categoria;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	@JsonManagedReference
	public List<Producto> getProductoList() {
		return productoList;
	}

	public void setProductoList(List<Producto> productoList) {
		this.productoList = productoList;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((categoria == null) ? 0 : categoria.hashCode());
		result = prime * result + id_categoria;
		result = prime * result + ((productoList == null) ? 0 : productoList.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Categoria other = (Categoria) obj;
		if (categoria == null) {
			if (other.categoria != null)
				return false;
		} else if (!categoria.equals(other.categoria))
			return false;
		if (id_categoria != other.id_categoria)
			return false;
		if (productoList == null) {
			if (other.productoList != null)
				return false;
		} else if (!productoList.equals(other.productoList))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Categoria [id_categoria=" + id_categoria + ", categoria=" + categoria + ", productoList=" + productoList
				+ "]";
	}
	
	
}
