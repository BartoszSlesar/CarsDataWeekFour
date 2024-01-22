import "../css/style.css"
import { Link } from 'react-router-dom'

export default function CardFooter({id}) {
    return (
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={"/" + id}>DETAILS</Link></div>
        </div>
    );
}