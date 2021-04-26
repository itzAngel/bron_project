package com.bron.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bron.dao.ClienteRepository;
import com.bron.dao.ProductoRepository;
import com.bron.dao.UsuarioRepository;
import com.bron.model.Cliente;
import com.bron.model.Producto;
import com.bron.model.Usuario;
@Service
public class BronServiceImpl implements BronService{

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
}
