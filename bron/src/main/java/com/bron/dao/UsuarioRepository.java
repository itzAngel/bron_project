package com.bron.dao;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.bron.model.Usuario;

public interface UsuarioRepository extends Repository<Usuario, String>{
	
	List<Usuario> findAll();

	Usuario findById(String id);

	Usuario save(Usuario p);

	void delete(Usuario p);
}
