package com.bron.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {
	@Id
    @Column(name = "DNI_CLIENTE", length = 8)
    private String dniCliente;
    
    @Column(name = "NOMBRE", length = 45)
	private String nombre;
    
    @Column(name = "APELLIDO", length = 45)
	private String apellido;

    @Column(name = "TELEFONO", length = 45)
	private String telefeno;

    @Column(name = "PROVINCIA", length = 45)
	private String provincia;
    
    @Column(name = "DISTRITO", length = 45)
	private String distrito;
    
    @Column(name = "DIRECCION", length = 100)
	private String direccion;
    
    @Column(name = "ID_CLIENTE", length = 45)
	private String idCliente;
    
    @Column(name = "CONTRASENA", length = 45)
	private String contrasena;

	public Cliente() {
		super();
	}

	public Cliente(String dniCliente, String nombre, String apellido, String telefeno, String provincia,
			String distrito, String direccion, String idCliente, String contrasena) {
		super();
		this.dniCliente = dniCliente;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefeno = telefeno;
		this.provincia = provincia;
		this.distrito = distrito;
		this.direccion = direccion;
		this.idCliente = idCliente;
		this.contrasena = contrasena;
	}

	public String getDniCliente() {
		return dniCliente;
	}

	public void setDniCliente(String dniCliente) {
		this.dniCliente = dniCliente;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getTelefeno() {
		return telefeno;
	}

	public void setTelefeno(String telefeno) {
		this.telefeno = telefeno;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getDistrito() {
		return distrito;
	}

	public void setDistrito(String distrito) {
		this.distrito = distrito;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(String idCliente) {
		this.idCliente = idCliente;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
    
    
}
