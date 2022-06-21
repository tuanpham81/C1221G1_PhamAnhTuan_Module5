package com.codegym.repository;

import com.codegym.model.EndPoint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEndPointRepository extends JpaRepository<EndPoint, Integer> {
}
