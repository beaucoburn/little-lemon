import Breadcrumb from "react-bootstrap/Breadcrumb";
import {useEffect, useState} from "react";
import {fetchAPI, submitAPI} from "./api.js";

function Reservation(props) {

    const {dispatch, state, submitForm} = props;
    const [times, setTimes] = useState([]);
    const clearForm = () => {
        dispatch({type: 'clear', payload: ''});
    };

    //function for submitting form and redirecting to confirmation page
    const handleSubmit = (e) => {
        e.preventDefault();
        submitAPI(state);
        submitForm();
        console.log(state);
        //alert("Reservation created!");
        clearForm();
      };

   useEffect(() => {state.date && setTimes(fetchAPI(state.date))}, [JSON.stringify(state.date)]);

    return (
            <div style={{ textAlign: "center", margin: "0px 290px"}}>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{fontWeight: "bold"}} >Guest Details</Breadcrumb.Item>
                    <Breadcrumb.Item href="/confirmation">Confirmation</Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{ color: "#333333", marginTop: "40px" }}>Reserve a Table Now:</h1>
                <h2 style={{ color: "#333333"}}>Please fill in the information below to reserve a table at the Little Lemon Restaurant.</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="name" style={{display: "flex", marginTop: "60px"}}>Name: </label>
                        <input
                            value={state.name}
                            onChange={(e) => {
                                dispatch({ type: 'name', payload: e.target.value });
                            }}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Please tell us your name here"
                            required
                            style={{
                                display: "flex",
                                width: "1100px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                    </div>
                    <div>
                        <label for="email" style={{display: "flex", marginTop: "45px"}}>Email: </label>
                        <input
                            value={state.email}
                            onChange={(e) => {
                                dispatch({ type: 'email', payload: e.target.value });
                            }}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email - eg. name@example.com"
                            required
                            style={{
                                display: "flex",
                                width: "1100px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                    </div>
                    <div>
                        <label for="phone" style={{display: "flex", marginTop: "45px"}}>Phone: </label>
                        <input
                            value={state.phone}
                            onChange={(e) => {
                                dispatch({ type: 'phone', payload: e.target.value });
                            }}
                            type="phone"
                            name="phone"
                            id="phone"
                            placeholder="Please let us know your phone number here"
                            required
                            style={{
                                display: "flex",
                                width: "1100px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                        <label for="guests" style={{display: "flex", marginTop: "45px"}}>Number of guests:</label>
                        <input
                            value={state.guests}
                            onChange={(e) => {
                                dispatch({ type: 'guests', payload: e.target.value });
                            }}
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            required
                            style={{
                                display: "flex",
                                width: "400px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                            }}
                            />
                            <label for="occasion" style={{display: "flex", marginTop: "45px"}}>Occasion:</label>
                            <select
                                value={state.occasion}
                                onChange={(e) => {
                                    dispatch({ type: 'occasion', payload: e.target.value });
                                }}
                                id="occasion"
                                style={{
                                    display: "flex",
                                    width: "400px",
                                    height: "40px",
                                    background: "#EDEFEE",
                                    borderRadius: "16px",
                                    borderColor: "#333333"
                                }}>
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                        <label for="res-date" style={{display: "flex", marginTop: "45px"}}>Choose date:</label>
                        <input
                            value={state.date}
                            onChange={(e) => {
                                dispatch({ type: 'date', payload: e.target.value });
                            }}
                            type="date"
                            id="res-date"
                            required
                            style={{
                                display: "flex",
                                width: "400px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                            }}/>
                        <label for="res-time" style={{display: "flex", marginTop: "45px"}}>Choose time:</label>
                        <select
                            value={state.time}
                            onChange={(e) => {
                                dispatch({ type: 'time', payload: e.target.value });
                            }}
                            id="res-time"
                            required
                            style={{
                                display: "flex",
                                width: "400px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                            }}>
                            {times.map((time) => (<option value={time}>{time}</option>))}
                        </select>
                        <button
                            type="submit"
                            value="Make Your reservation"
                            style={{
                                marginTop: "45px",
                                marginBottom: "45px",
                                justifyItems: "end",
                                height: "50px"
                                }}>
                                    Make Your Reservation
                                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Reservation;