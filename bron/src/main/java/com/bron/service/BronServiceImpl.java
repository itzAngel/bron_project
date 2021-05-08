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
	
	
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private ProductoRepository productoRepository;
	
	@Autowired
	private DetalleProductoRepository detalleProductoRepository;
	
	
	/* 
	 * 
	 * Cliente 
	 * 
	 * */
	
	@Override
	public List<Cliente> listarCliente() {
		return clienteRepository.findAll();
	}

	@Override
	public Cliente listarIdCliente(int id) {
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
	public Cliente deleteCliente(int id) {
		Cliente agente = listarIdCliente(id);
		clienteRepository.delete(agente);
		return agente;
	}
	
	
	/* 
	 * 
	 * Usuario 
	 * 
	 * */
	
	@Override
	public List<Usuario> listarUsuario() {
		return usuarioRepository.findAll();
	}

	@Override
	public Usuario listarIdUsuario(int id) {
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
	public Usuario deleteUsuario(int id) {
		Usuario agente = listarIdUsuario(id);
		usuarioRepository.delete(agente);
		return agente;
	}
	
	
	
	/* 
	 * 
	 * Categoria 
	 * 
	 * */
	
	@Override
	public List<Categoria> listarCategoria() {
		return categoriaRepository.findAll();
	}

	@Override
	public Categoria listarIdCategoria(int id) {
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
	public Categoria deleteCategoria(int id) {
		Categoria agente = listarIdCategoria(id);
		categoriaRepository.delete(agente);
		return agente;
	}
	
	
	
	/* 
	 * 
	 * Producto 
	 * 
	 * */
	
	@Override
	public List<Producto> listarProducto() {
		return productoRepository.findAll();
	}
	
	@Override
	public Producto listarIdProducto(int id) {
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
	public Producto deleteProducto(int id) {
		Producto agente = listarIdProducto(id);
		productoRepository.delete(agente);
		return agente;
	}
	
	
	
	
	
	/* 
	 * 
	 * DetalleProducto 
	 * 
	 * */
	
	
	@Override
	public List<DetalleProducto> listarDetalleProducto() {
		return detalleProductoRepository.findAll();
	}
	
	@Override
	public DetalleProducto listarIdDetalleProducto(int id) {
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
	public DetalleProducto deleteDetalleProducto(int id) {
		DetalleProducto a = listarIdDetalleProducto(id);
		detalleProductoRepository.delete(a);
		return a;
	}
	
}
