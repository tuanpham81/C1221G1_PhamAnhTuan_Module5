package com.codegym.controller;

import com.codegym.dto.CarDto;
import com.codegym.model.Car;
import com.codegym.model.EndPoint;
import com.codegym.model.StartPoint;
import com.codegym.service.ICarService;
import com.codegym.service.IEndPointService;
import com.codegym.service.IStartPointService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")

public class CarController {
    @Autowired
    private ICarService iCarService;
    @Autowired
    private IEndPointService iEndPointService;
    @Autowired
    private IStartPointService iStartPointService;

    @GetMapping("/cars")
    public ResponseEntity<Page<Car>> listAll(@RequestParam(defaultValue = "0") Integer page,
                                             @RequestParam(defaultValue = "2") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Car> carPage = this.iCarService.findAll(pageable);
        if (!carPage.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carPage, HttpStatus.OK);
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> findCarById(@PathVariable String id) {
        Car car = iCarService.findById(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> addOrUpdateCar(@PathVariable String id, @RequestBody Car newCar) {
        Car car = iCarService.findById(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        car.setType(newCar.getType());
        car.setName(newCar.getName());
        car.setStartPoint(newCar.getStartPoint());
        car.setEndPoint(newCar.getEndPoint());
        car.setPhone(newCar.getPhone());
        car.setStartTime(newCar.getStartTime());
        car.setEndTime(newCar.getEndTime());
        return new ResponseEntity<>(iCarService.save(car), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Car> deleteCustomer(@PathVariable String id) {
        Car car = iCarService.findById(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iCarService.delete(id);
        return new ResponseEntity<>(car, HttpStatus.NO_CONTENT);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<List<FieldError>> createPhuongTien(@Validated @RequestBody CarDto carDto,
                                                             BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.NO_CONTENT);
        }
        Car car = new Car();
        BeanUtils.copyProperties(carDto, car);
        iCarService.save(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/startPoints")
    public ResponseEntity<List<StartPoint>> listAllSP() {
        List<StartPoint> startPoints = this.iStartPointService.findAll();
        if (startPoints.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(startPoints, HttpStatus.OK);
    }

    @GetMapping("/endPoints")
    public ResponseEntity<List<EndPoint>> listAllEP() {
        List<EndPoint> endPoints = this.iEndPointService.findAll();
        if (endPoints.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(endPoints, HttpStatus.OK);
    }
}
