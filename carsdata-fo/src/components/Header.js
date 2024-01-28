import "../css/style.css"
import {Ract} from "react"
import SearchBar from "./SearchBar";

export default function Header({forceUpdate}) {
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">CARS DATA</h1>
                    </div>
                </div>
            </header>
        </>
    );
}