import {Link, redirect, useNavigate, useParams} from "react-router-dom";
import {getCarById} from "../api/carsApi";
import {useEffect, useState} from "react";
import styles from "../css/detail.module.css"
import arrow from "../assets/icons8-arrow-30.png"

export default function CarDetails({reducerValue}) {
    const [carDetails, setCarDetails] = useState({})
    const {id} = useParams()
    const abortControler = new AbortController();
    const navigate = useNavigate();

    const initFetchCarById = async () => {
        try {
            const tempCarDetail = await getCarById(id, {signal: abortControler.signal})
            setCarDetails(tempCarDetail)
        } catch (error) {
            navigate("/ups/not/found")
        }

    }

    useEffect(() => {

        initFetchCarById();
        return () => abortControler.abort();

    }, [reducerValue]);


    return (

        <div id={styles.container}>
            <div className={styles.product_details}>

                <h1>{carDetails.mark} {carDetails.model}</h1>


                <p>
                    Color: {carDetails.color}
                </p>
                <div className={styles.control}>


                    <button className={styles.btn}>
                        <Link to={"/"}>

                            <span className={styles.price}><img src={arrow}/></span>

                            <span className={styles.buy}>Back</span>

                        </Link>

                    </button>


                </div>

            </div>

            <div className={styles.product_image}>
                <img src={`data:image/jpeg;base64,${carDetails.image}`} alt="..."/>
            </div>


        </div>

    );
}