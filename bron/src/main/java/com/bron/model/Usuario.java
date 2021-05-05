package com.bron.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @Column(name = "DNI_USUARIO", length = 8)
    private String dniUsuario;
    
    @Column(name = "NOMBRES", length = 45)
	private String nombre;
    
    @Column(name = "APELLIDOS", length = 45)
	private String apellido;
    
    @Column(name = "EMAIL", length = 45)
	private String email;
    
    @Column(name = "PRIVILEGIO", length = 1)
	private String privilegio;
    
    @Column(name = "ID_USUARIO", length = 45)
	private String idUsuario;
    
    @Column(name = "CONTRASENA", length = 45)
	private String contrasena;

	public Usuario() {
		super();
	}

	public Usuario(String dniUsuario, String nombre, String apellido, String email, String privilegio, String idUsuario,
			String contrasena) {
		super();
		this.dniUsuario = dniUsuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.privilegio = privilegio;
		this.idUsuario = idUsuario;
		this.contrasena = contrasena;
	}

	public String getDniUsuario() {
		return dniUsuario;
	}

	public void setDniUsuario(String dniUsuario) {
		this.dniUsuario = dniUsuario;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPrivilegio() {
		return privilegio;
	}

	public void setPrivilegio(String privilegio) {
		this.privilegio = privilegio;
	}

	public String getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
    
}
