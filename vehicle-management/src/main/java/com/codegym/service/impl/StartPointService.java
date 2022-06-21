package com.codegym.service.impl;

import com.codegym.model.StartPoint;
import com.codegym.repository.IStartPointRepository;
import com.codegym.service.IStartPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartPointService implements IStartPointService {
    @Autowired
    private IStartPointRepository iStartPointRepository;
    @Override
    public List<StartPoint> findAll() {
        return iStartPointRepository.findAll();
    }
}
