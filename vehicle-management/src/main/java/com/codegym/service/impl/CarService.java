package com.codegym.service.impl;

import com.codegym.model.Car;
import com.codegym.repository.ICarRepository;
import com.codegym.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository iCarRepository;

    @Override
    public Page<Car> findAll(Pageable pageable) {
        return iCarRepository.findAll(pageable);
    }

    @Override
    public Page<Car> findByNameAndId(String name, String id, Pageable pageable) {
        return iCarRepository.findAllByNameContainingAndId(name, id, pageable);
    }

    @Override
    public Car save(Car car) {
        return iCarRepository.save(car);
    }

    @Override
    public Car findById(String id) {
        return iCarRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(String id) {
        iCarRepository.deleteById(id);
    }
}
