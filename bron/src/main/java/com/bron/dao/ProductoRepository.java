package com.bron.dao;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.bron.model.Producto;

public interface ProductoRepository extends Repository<Producto, String>{

	List<Producto> findAll();

	Producto findById(String id);

	Producto save(Producto p);

	void delete(Producto p);
}
