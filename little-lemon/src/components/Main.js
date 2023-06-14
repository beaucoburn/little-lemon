import Confirmation from "./Confirmation.js";
import Reservation from "./Reservation.js";
import Homepage from "./Homepage.js"
import {Routes, Route} from 'react-router-dom';

function Main() {
    return (
        <main>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/reservation" element={<Reservation />}></Route>
                    <Route path="/confirmation" element={<Confirmation />}></Route>
                </Routes>
        </main>
    );
}

export default Main;