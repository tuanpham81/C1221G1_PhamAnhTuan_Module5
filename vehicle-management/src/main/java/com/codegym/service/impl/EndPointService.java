package com.codegym.service.impl;

import com.codegym.model.EndPoint;
import com.codegym.repository.IEndPointRepository;
import com.codegym.service.IEndPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EndPointService implements IEndPointService {
    @Autowired
    private IEndPointRepository iEndPointRepository;

    @Override
    public List<EndPoint> findAll() {
        return iEndPointRepository.findAll();
    }
}
