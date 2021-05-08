package com.bron.dao;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.bron.model.Producto;

public interface ProductoRepository extends Repository<Producto,Integer>{
	
	List<Producto> findAll();

	Producto findById(int id);

	Producto save(Producto p);

	void delete(Producto p);
}
