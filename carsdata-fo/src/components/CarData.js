import CardBody from "./CardBody";
import CardFooter    from "./CardFooter";
import "../css/style.css"

export default function CarData() {
    return (
        <div class="col mb-5">
            <div class="card h-100">

                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <CardBody/>
                <CardFooter/>
            </div>
        </div>
    );
}