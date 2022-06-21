package com.codegym.repository;

import com.codegym.model.StartPoint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IStartPointRepository extends JpaRepository<StartPoint, Integer> {
}
