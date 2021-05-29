package com.bron.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "venta")
public class Venta implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    private int id_venta;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date fecha_venta;
	
	@Column
	private double precio_total;
	
	@ManyToOne()
    @JoinColumn(name = "id_cliente", referencedColumnName = "id_cliente")
    private Cliente cliente;
	
	@OneToMany(mappedBy = "venta")
    private List<DetalleVenta> listaDetalleVenta = new ArrayList<>();
	
	public Venta() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Venta(int id_venta, Date fecha_venta, double precio_total, Cliente cliente) {
		super();
		this.id_venta = id_venta;
		this.fecha_venta = fecha_venta;
		this.precio_total = precio_total;
		this.cliente = cliente;
	}

	public int getId_venta() {
		return id_venta;
	}

	public void setId_venta(int id_venta) {
		this.id_venta = id_venta;
	}

	public Date getFecha_venta() {
		return fecha_venta;
	}

	public void setFecha_venta(Date fecha_venta) {
		this.fecha_venta = fecha_venta;
	}

	public double getPrecio_total() {
		return precio_total;
	}

	public void setPrecio_total(double precio_total) {
		this.precio_total = precio_total;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
}
