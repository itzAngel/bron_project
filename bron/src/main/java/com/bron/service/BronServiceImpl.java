package com.bron.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bron.dao.CategoriaRepository;
import com.bron.dao.ClienteRepository;
import com.bron.dao.DetalleProductoRepository;
import com.bron.dao.ProductoRepository;
import com.bron.dao.UsuarioRepository;
import com.bron.model.Categoria;
import com.bron.model.Cliente;
import com.bron.model.DetalleProducto;
import com.bron.model.Producto;
import com.bron.model.Usuario;
@Service
public class BronServiceImpl implements BronService{
	
	
	/* 
	 * 
	 * Cliente 
	 * 
	 * */
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Override
	public List<Cliente> listarCliente() {
		return clienteRepository.findAll();
	}

	@Override
	public Cliente listarIdCliente(String id) {
		return clienteRepository.findById(id);
	}

	@Override
	public Cliente addCliente(Cliente u) {
		return clienteRepository.save(u);
	}

	@Override
	public Cliente editCliente(Cliente u) {
		return clienteRepository.save(u);
	}

	@Override
	public Cliente deleteCliente(String id) {
		Cliente agente = listarIdCliente(id);
		clienteRepository.delete(agente);
		return agente;
	}
	
	
	/* 
	 * 
	 * Usuario 
	 * 
	 * */
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public List<Usuario> listarUsuario() {
		return usuarioRepository.findAll();
	}

	@Override
	public Usuario listarIdUsuario(String id) {
		return usuarioRepository.findById(id);
	}

	@Override
	public Usuario addUsuario(Usuario u) {
		return usuarioRepository.save(u);
	}

	@Override
	public Usuario editUsuario(Usuario u) {
		return usuarioRepository.save(u);
	}

	@Override
	public Usuario deleteUsuario(String id) {
		Usuario agente = listarIdUsuario(id);
		usuarioRepository.delete(agente);
		return agente;
	}
	
	
	
	/* 
	 * 
	 * Categoria 
	 * 
	 * */
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Override
	public List<Categoria> listarCategoria() {
		return categoriaRepository.findAll();
	}

	@Override
	public Categoria listarIdCategoria(String id) {
		return categoriaRepository.findById(id);
	}

	@Override
	public Categoria addCategoria(Categoria u) {
		return categoriaRepository.save(u);
	}

	@Override
	public Categoria editCategoria(Categoria u) {
		return categoriaRepository.save(u);
	}

	@Override
	public Categoria deleteCategoria(String id) {
		Categoria agente = listarIdCategoria(id);
		categoriaRepository.delete(agente);
		return agente;
	}
	
	
	
	/* 
	 * 
	 * Producto 
	 * 
	 * */
	@Autowired
	private ProductoRepository productoRepository;
	
	@Override
	public List<Producto> listarProducto() {
		return productoRepository.findAll();
	}

	@Override
	public Producto listarIdProducto(String id) {
		return productoRepository.findById(id);
	}

	@Override
	public Producto addProducto(Producto u) {
		return productoRepository.save(u);
	}

	@Override
	public Producto editProducto(Producto u) {
		return productoRepository.save(u);
	}

	@Override
	public Producto deleteProducto(String id) {
		Producto agente = listarIdProducto(id);
		productoRepository.delete(agente);
		return agente;
	}
	
	
	
	/* 
	 * 
	 * DetalleProducto 
	 * 
	 * */
	@Autowired
	private DetalleProductoRepository detalleProductoRepository;
	
	@Override
	public List<DetalleProducto> listarDetalleProducto() {
		return detalleProductoRepository.findAll();
	}

	@Override
	public DetalleProducto listarIdDetalleProducto(String id) {
		return detalleProductoRepository.findById(id);
	}

	@Override
	public DetalleProducto addDetalleProducto(DetalleProducto u) {
		return detalleProductoRepository.save(u);
	}

	@Override
	public DetalleProducto editDetalleProducto(DetalleProducto u) {
		return detalleProductoRepository.save(u);
	}

	@Override
	public DetalleProducto deleteDetalleProducto(String id) {
		DetalleProducto agente = listarIdDetalleProducto(id);
		detalleProductoRepository.delete(agente);
		return agente;
	}
}
