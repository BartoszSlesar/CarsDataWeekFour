import CardBody from "./CardBody";
import CardFooter    from "./CardFooter";
import "../css/style.css"

export default function CarData({carData}) {
    return (
        <div className="col mb-5">
            <div className="card h-100">

                <img className="card-img-top" src={`data:image/jpeg;base64,${carData.image}`} alt="..." />
                <CardBody mark={carData.mark}
                          model={carData.model}
                          color={carData.color}/>
                <CardFooter id={carData.id}/>
            </div>
        </div>
    );
}