import Breadcrumb from "react-bootstrap/Breadcrumb";
import DateTimePicker from "./DateTimePicker";
import Form from "react-bootstrap/Form";

function Reservation() {
    return (
            <div style={{ textAlign: "center", margin: "0px 290px"}}>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{fontWeight: "bold"}} >Guest Details</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Special Requests</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Confirmation</Breadcrumb.Item>
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
                                width: "1000px",
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
                                width: "1000px",
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
                                width: "1000px",
                                height: "40px",
                                background: "#EDEFEE",
                                borderRadius: "16px",
                                borderColor: "#333333"
                                }}/>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label for="people" style={{display: "flex", marginTop: "45px"}}>Number of People:</label>
                            <select
                                type="select"
                                name="people"
                                id="people"
                                required
                                style={{
                                    width: "400px",
                                    height: "40px",
                                    background: "#EDEFEE",
                                    borderRadius: "16px",
                                    borderColor: "#333333",
                                    justifyContent: "flex-start"
                                    }}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                        </div>
                        <div>
                            <label for="datetime" style={{display: "flex", marginTop: "45px"}}>Select a Date and Time</label>
                            <DateTimePicker />
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label for="location" style={{display: "flex", marginTop: "45px"}}>Seating Location:</label>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input
                                    type={"radio"}
                                    name={"location"}
                                    id={"inside"}
                                    value={"inside"}
                                    checked
                                    style={{
                                        fontFamily: "Markazi",
                                        fontSize: "15px",
                                        margin: "5px",
                                    }}
                                    />
                                <label for="inside" style={{display: "flex"}}>Inside</label>
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input
                                    type={"radio"}
                                    name={"location"}
                                    id={"outside"}
                                    value={"outside"}
                                    style={{
                                        fontFamily: "Markazi",
                                        fontSize: "15px",
                                        margin: "5px",
                                    }}
                                    />
                                <label for="outside" style={{display: "flex"}}>Outside</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Next</button>
                    </div>
                </form>
            </div>
    );
}

export default Reservation;