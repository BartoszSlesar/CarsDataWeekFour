package com.bard.carsdataweekthree.service;

import com.bard.carsdataweekthree.model.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {
    List<Car> getCars();

    Optional<Car> getCarById(long id);

    List<Car> getCarByColor(String color);

    Optional<Car> addNewCar(Car newCar);

    Optional<Car> modifyCar(Car currentCar);



    Optional<Car> removeCar(long id);

}
