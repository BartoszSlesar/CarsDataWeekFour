package com.bard.carsdataweekthree.service;

import com.bard.carsdataweekthree.model.Car;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class CarServiceImpl implements CarService {

    private static long currentId = 0;
    private List<Car> carList;

    public CarServiceImpl() {
        this.carList = new ArrayList<>();
        Car car1 = new Car(1,"Skoda","Octavia","Black");
        this.addNewCar(car1);
        Car car2 = new Car(2,"Toyota","Corolla","Silver");
        this.addNewCar(car2);
        Car car3 = new Car(3,"Honda","Civic","Blue");
        this.addNewCar(car3);
    }

    @Override
    public List<Car> getCars() {
        return this.carList;
    }

    @Override
    public Optional<Car> getCarById(long id) {
        return this.carList.stream().filter(car -> car.getId() == id).findFirst();
    }

    @Override
    public List<Car> getCarByColor(String color) {
        return this.carList.stream()
                .filter(car -> car.getColor().equalsIgnoreCase(color))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Car> addNewCar(Car newCar) {
        newCar.setId(currentId);
        currentId++;
        boolean add = this.carList.add(newCar);
        return add ? Optional.of(newCar) : Optional.empty();
    }


    @Override
    public Optional<Car> modifyCar(Car currentCar) {
        Optional<Car> optionalCar = this.carList.stream()
                .filter(car -> car.getId() == currentCar.getId()).findFirst();
        if (optionalCar.isPresent()) {
            this.carList.remove(optionalCar.get());
            this.carList.add(currentCar);
            return Optional.of(currentCar);
        }
        return this.addNewCar(currentCar);
    }


    @Override
    public Optional<Car> removeCar(long id) {
        Optional<Car> optionalCar = this.carList
                .stream()
                .filter(car -> car.getId() == id)
                .findFirst();

        optionalCar.ifPresent(car -> this.carList.remove(car));
        return optionalCar;
    }
}
