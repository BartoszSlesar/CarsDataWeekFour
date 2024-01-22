import "../css/style.css"
import {useEffect, useState, React} from "react";
import {listCars} from "../api/carsApi";
import CardBody from "./CardBody";
import CarData from "./CarData";
export default function CarMainView() {
    const [carList, setCarList] = useState([])
    const initFetchCars = async () => {
        const tempCarList = await listCars()
        setCarList(tempCarList)
    }

    useEffect(() => {
        initFetchCars()
    }, []);

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {carList.map((carData) => <CarData key={carData.id}
                                                           carData={carData}/>)}
                    </div>
                </div>
            </section>
        </>
    );
}