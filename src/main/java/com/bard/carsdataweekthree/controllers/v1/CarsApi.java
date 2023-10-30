package com.bard.carsdataweekthree.controllers.v1;


import com.bard.carsdataweekthree.model.Car;
import com.bard.carsdataweekthree.service.CarService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cars")
@AllArgsConstructor
public class CarsApi {

    private CarService carService;


    @GetMapping(produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Car>> getCars() {
        return new ResponseEntity<>(this.carService.getCars(), HttpStatus.OK);
    }


    @GetMapping(path = "/{id}",produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Car> getCarById(@PathVariable(name = "id") long id) {
        Optional<Car> optionalCar = carService.getCarById(id);
        return optionalCar
                .map(car -> new ResponseEntity<>(car, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(path = "/color/{color}", produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Car>> getCarByColor(@PathVariable String color) {
        List<Car> cars = carService.getCarByColor(color);
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<Car> addCar(@Validated @RequestBody Car newCar) {
        Optional<Car> addedCar = this.carService.addNewCar(newCar);
        return addedCar
                .map(car -> new ResponseEntity<>(car, HttpStatus.CREATED))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @PutMapping
    public ResponseEntity<Car> modifyCar(@Validated @RequestBody Car newCar) {
        Optional<Car> addedCar = this.carService.modifyCar(newCar);
        return addedCar
                .map(car -> new ResponseEntity<>(car, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
    }


    @PatchMapping("/{id}")
    public ResponseEntity<Car> modifyField(@PathVariable long id, @RequestBody Car modfiedCar) {
        Optional<Car> optionalCar = carService.getCarById(id);
        if (optionalCar.isPresent()) {
            Car currentCar = optionalCar.get();
            if (modfiedCar.getModel() != null
                    && !currentCar.getModel().equals(modfiedCar.getModel())
                    && !modfiedCar.getModel().isEmpty()) {
                currentCar.setModel(modfiedCar.getModel());
            }
            if (modfiedCar.getMark() != null
                    && !currentCar.getMark().equals(modfiedCar.getMark())
                    && !modfiedCar.getMark().isEmpty()) {
                currentCar.setModel(modfiedCar.getModel());
            }
            if (modfiedCar.getColor() != null && !currentCar.getColor().equals(modfiedCar.getColor())) {
                currentCar.setColor(modfiedCar.getColor());
            }
            carService.modifyCar(currentCar);
            return new ResponseEntity<>(currentCar, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Car> addCar(@PathVariable long id) {

        return this.carService.removeCar(id)
                .map(car -> new ResponseEntity<>(car, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


}
