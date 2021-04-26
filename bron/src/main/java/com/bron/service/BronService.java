package com.bron.service;

import java.util.List;

import com.bron.model.Cliente;
import com.bron.model.Producto;
import com.bron.model.Usuario;

public interface BronService {
	List<Cliente> listarCliente();

	Cliente listarIdCliente(String id);

	Cliente addCliente(Cliente u);

	Cliente editCliente(Cliente u);

	Cliente deleteCliente(String id);
	
	List<Producto> listarProducto();

	Producto listarIdProducto(String id);

	Producto addProducto(Producto u);

	Producto editProducto(Producto u);

	Producto deleteProducto(String id);
	
	List<Usuario> listarUsuario();

	Usuario listarIdUsuario(String id);

	Usuario addUsuario(Usuario u);

	Usuario editUsuario(Usuario u);

	Usuario deleteUsuario(String id);
}
