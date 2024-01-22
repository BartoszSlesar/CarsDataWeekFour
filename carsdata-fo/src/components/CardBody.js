import "../css/style.css"

export default function CardBody({mark, model, color}) {
    return (
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{mark} {model}</h5>
                <h5 className="fw-bolder">{color}</h5>
            </div>
        </div>
    );
}