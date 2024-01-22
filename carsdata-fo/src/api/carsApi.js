import api from "./api"

export function listCars(config) {
    return api.get("api/v1/cars").then(res => res.data);
};

export function getCarById(carId, config) {
    return api.get(`api/v1/cars/${carId}`).then(res => res.data);
};

export function addNewCar(car, config) {
    return api.post('api/v1/cars', car, config);
}