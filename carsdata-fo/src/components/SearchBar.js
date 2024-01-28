import styles from "../css/searchbar.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SearchBar({forceUpdate, endpoint, placeholder, label}) {
    const [searchedValue, setSearchedValue] = useState("")
    const navigate = useNavigate();

    const setSearchValue = (event) => {
        if (event.target.value !== 0) {
            setSearchedValue(event.target.value)
        }

    }
    const search = (event) => {

        if (searchedValue !== 0) {
            console.log(searchedValue)
            forceUpdate()
            navigate(endpoint + searchedValue)
        }


    }
    return (
        <div className={styles.Card}>
            <div className={styles.CardInner}>
                <label>{label}</label>
                <div className={styles.container}>
                    <div className={styles.Icon}>
                        <svg onClick={search} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24"
                             fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round"
                             stroklinejoin="round" className="feather feather-search">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                    </div>
                    <div className={styles.InputContainer}>
                        <input onChange={setSearchValue} placeholder={placeholder}/>
                    </div>
                </div>
            </div>
        </div>
    );
}