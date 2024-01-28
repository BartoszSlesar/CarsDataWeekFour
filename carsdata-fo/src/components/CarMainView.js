import "../css/style.css"
import {useEffect, useState, React, useReducer} from "react";
import {getCarByColor, getCarById, listCars} from "../api/carsApi";
import CarData from "./CarData";
import {useParams} from "react-router-dom";

export default function CarMainView({reducerValue, forceUpdate}) {
    const [carList, setCarList] = useState([])

    const {color} = useParams()

    const abortControler = new AbortController();


    useEffect(() => {
        if ((color !== undefined) && (color.trim().length !== 0)) {
            const initFetchCarByColor = async () => {
                const tempCars = await getCarByColor(color, {signal: abortControler.signal})
                setCarList(tempCars)
            }

            initFetchCarByColor();
            return () => abortControler.abort();

        } else {
            const initFetchCars = async () => {
                const tempCarList = await listCars({signal: abortControler.signal})
                setCarList(tempCarList)
            }

            initFetchCars();
            return () => abortControler.abort();
        }


    }, [reducerValue]);


    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {carList.map((carData) => <CarData key={carData.id}
                                                           carData={carData}
                                                           forceUpdate={forceUpdate}/>)}
                    </div>

                </div>

            </section>
        </>
    );
}