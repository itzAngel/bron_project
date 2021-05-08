package com.bron.service;

import java.util.List;

import com.bron.model.Categoria;
import com.bron.model.Cliente;
import com.bron.model.DetalleProducto;
import com.bron.model.Producto;
import com.bron.model.Usuario;

public interface BronService {
	
	/* Cliente */
	List<Cliente> listarCliente();

	Cliente listarIdCliente(int id);

	Cliente addCliente(Cliente u);

	Cliente editCliente(Cliente u);

	Cliente deleteCliente(int id);
	
	
	
	/* Usuario */
	List<Usuario> listarUsuario();

	Usuario listarIdUsuario(int id);

	Usuario addUsuario(Usuario u);

	Usuario editUsuario(Usuario u);

	Usuario deleteUsuario(int id);
	
	
	
	/* Categoria */
	List<Categoria> listarCategoria();

	Categoria listarIdCategoria(int id);

	Categoria addCategoria(Categoria u);

	Categoria editCategoria(Categoria u);

	Categoria deleteCategoria(int id);
	
	
	
	/* Producto */
	List<Producto> listarProducto();

	Producto listarIdProducto(int id);

	Producto addProducto(Producto u);

	Producto editProducto(Producto u);

	Producto deleteProducto(int id);
	
	
	
	/* DetalleProducto */
	List<DetalleProducto> listarDetalleProducto();

	DetalleProducto listarIdDetalleProducto(int id);

	DetalleProducto addDetalleProducto(DetalleProducto u);

	DetalleProducto editDetalleProducto(DetalleProducto u);

	DetalleProducto deleteDetalleProducto(int id);
	
}
