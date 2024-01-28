import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import CarMainView from "./components/CarMainView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CarDetails from "./components/CarDetails";
import SearchBar from "./components/SearchBar";
import {useReducer, React} from "react";
import NotFound from "./components/NotFound";
import AddCar from "./components/AddCar";


function App() {
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)
    return (
        <Router>
            <div className="App">
                <NavigationBar/>
                <Header forceUpdate={forceUpdate}/>


                <Routes>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/" exact element={
                        <>
                            <div>
                                <SearchBar endpoint={"/"} forceUpdate={forceUpdate} placeholder={"Type id"}
                                           label={"Search by id"}/>
                                <SearchBar endpoint={"/cars/"} forceUpdate={forceUpdate} placeholder={"Type color"}
                                           label={"Search by color"}/>
                            </div>
                            <CarMainView reducerValue={reducerValue} forceUpdate={forceUpdate}/>

                        </>


                    }
                    />
                    <Route path="cars/" exact element={
                        <>
                            <div>
                                <SearchBar endpoint={"/"} forceUpdate={forceUpdate} placeholder={"Type id"}
                                           label={"Search by id"}/>
                                <SearchBar endpoint={"/cars/"} forceUpdate={forceUpdate} placeholder={"Type color"}
                                           label={"Search by color"}/>
                            </div>
                            <CarMainView reducerValue={reducerValue}/>
                        </>


                    }/>
                    <Route path=":id" element={<CarDetails reducerValue={reducerValue}/>}/>
                    <Route path="cars/:color" element={<CarMainView reducerValue={reducerValue}/>}/>
                    <Route path="cars/add" exact={true} element={<AddCar forceUpdate={forceUpdate}/>}/>

                </Routes>

            </div>
        </Router>
    );
}

export default App;
