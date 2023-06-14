import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
//import Form from "react-bootstrap/Form";

function Reservation() {
    return (
            <div style={{ textAlign: "center", margin: "0px 290px"}}>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{fontWeight: "bold"}} >Guest Details</Breadcrumb.Item>
                    <Breadcrumb.Item href="/confirmation">Confirmation</Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{ color: "#333333", marginTop: "40px" }}>Reserve a Table Now:</h1>
                <h2 style={{ color: "#333333"}}>Please fill in the information below to reserve a table at the Little Lemon Restaurant.</h2>
                <form>
                    <div>
                        <label for="name" style={{display: "flex", marginTop: "60px"}}>Name: </label>
                        <input
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
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                        <Link to="/confirmation" className="nav-item" ><button type="submit" value="Make Your reservation">Make Your Reservation</button></Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Reservation;