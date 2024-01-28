import {useState} from "react";
import {addNewCar} from "../api/carsApi";
import {useNavigate} from "react-router-dom";


export default function AddCar({forceUpdate}) {
    const [image, setImage] = useState("")
    const [mark, setMark] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const navigate = useNavigate();

    const changeImage = (event) => {
        console.log(event.target.files)

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setImage(reader.result.split(",")[1])
        };
        reader.onerror =  (error) => {
            console.log('Error: ', error);
        };
    }

    const setCarMark = (event) =>{
        setMark(event.target.value)
    }

    const setCarModel = (event) =>{
        setModel(event.target.value)
    }

    const setCarColor = (event) =>{
        setColor(event.target.value)
    }

    const createNewCar = (event) => {
        event.preventDefault();
        let newCar = {
            "mark": mark,
            "model": model,
            "color": color,
            "image": image
        }
        addNewCar(newCar)
        forceUpdate()
        navigate("/")
    }



    return (
        <form onSubmit={createNewCar} className="pure-form pure-form-stacked">
            <fieldset >
                <legend>Add new car</legend>
                <label htmlFor="stacked-mark">Mark</label>
                <input onChange={setCarMark} type="text" id="stacked-mark" placeholder="Car Mark"/>
                <label htmlFor="stacked-model">Model</label>
                <input onChange={setCarModel} type="text" id="stacked-model" placeholder="Car Model"/>
                <label htmlFor="stacked-color">Car Color</label>
                <input onChange={setCarColor} type="text" id="stacked-color" placeholder="Car Color"/>
                <label htmlFor="stacked-img">Upload Image</label>
                <input accept="image/jpeg" type="file" onChange={changeImage} id="stacked-img" className="btn btn-outline-secondary"/>
                <label/>
                <button type="submit" className="btn btn-lg btn-secondary">Create</button>
                <label/>
            </fieldset>

        </form>
    );
}