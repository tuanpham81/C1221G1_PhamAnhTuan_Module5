package com.codegym.service;

import com.codegym.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarService {
    Page<Car> findAll(String id, String name, Pageable pageable);
    Page<Car> findByNameAndId(String name, String id, Pageable pageable);
    Car save(Car car);
    Car findById(String id);
    void delete(String id);
}
