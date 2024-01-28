import "../css/style.css"
import {Link} from 'react-router-dom'
import {deleteCarById} from "../api/carsApi";

export default function CardFooter({id, carData, forceUpdate}) {


    const deleteCar = () => {

        deleteCarById(id, {})
        forceUpdate()
    }

    return (
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <Link className="btn btn-outline-dark mt-auto" to={"/" + id}>Details</Link>
                <button onClick={deleteCar} className="btn btn-outline-dark mt-auto">Delete</button>
            </div>
        </div>
    );
}