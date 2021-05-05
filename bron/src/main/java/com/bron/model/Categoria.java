package com.bron.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "categoria")
public class Categoria implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @Column(name = "CODIGO_CATEGORIA", length = 8)
    private String codigoCategoria;
    
    @Column(name = "CATEGORIA", length = 45)
	private String categoria;

	public Categoria() {
		super();
	}

	public Categoria(String codigoCategoria, String categoria) {
		super();
		this.codigoCategoria = codigoCategoria;
		this.categoria = categoria;
	}

	public String getCodigoCategoria() {
		return codigoCategoria;
	}

	public void setCodigoCategoria(String codigoCategoria) {
		this.codigoCategoria = codigoCategoria;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
    
}
