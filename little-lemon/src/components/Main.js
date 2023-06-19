import Confirmation from "./Confirmation.js";
import Reservation from "./Reservation.js";
import Homepage from "./Homepage.js"
import {Routes, Route, redirect} from 'react-router-dom';
import {useReducer} from "react";
import { submitAPI } from "./api.js";

//Turn state for date and time into a reducer and pass as a prop to Reservation.js
const reducer = (state, action) => {
    switch (action.type) {
        case 'clear':
            return {};
        case 'date':
            return {...state, date: action.payload};
        case 'time':
            return {...state, time: action.payload};
        case 'name':
            return {...state, name: action.payload};
        case 'email':
            return {...state, email: action.payload};
        case 'phone':
            return {...state, phone: action.payload};
        case 'guests':
            return {...state, guests: action.payload};
        case 'occasion':
            return {...state, occasion: action.payload};
        default:
            return state;
    }
}

//function for submitting form and redirecting to confirmation page
const submitForm = (state) => {

    if (submitAPI(state) === true) {
        redirect("/confirmation");
        console.log("Form submitted!");
    }
}

function Main() {

    const initialState = {}
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <main>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/reservation" element={<Reservation submitForm={submitForm} state={state} dispatch={dispatch}/>}></Route>
                    <Route path="/confirmation" element={<Confirmation />}></Route>
                </Routes>
        </main>
    );
}

export default Main;