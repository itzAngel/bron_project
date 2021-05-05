package com.bron.dao;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.bron.model.DetalleProducto;

public interface DetalleProductoRepository extends Repository<DetalleProducto, String> {
	
	List<DetalleProducto> findAll();

	DetalleProducto findById(String id);

	DetalleProducto save(DetalleProducto p);

	void delete(DetalleProducto p);
	
}
