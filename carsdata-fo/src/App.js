import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import CarMainView from "./components/CarMainView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CarDetails from "./components/CarDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar/>
                <Header/>
                <Routes>
                    <Route path="/" exact element={ <CarMainView/>} />
                    <Route path="/:id" element={ <CarDetails/>} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
