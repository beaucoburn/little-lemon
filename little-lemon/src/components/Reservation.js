import Breadcrumb from "./Breadcrumb";

function Reservation() {
    return (
            <div style={{ textAlign: "center", margin: "0px 290px"}}>
                <Breadcrumb />
                <h1 style={{ color: "#333333", marginTop: "40px" }}>Reserve a Table Now:</h1>
                <h2 style={{ color: "#333333"}}>Please fill in the information below to reserve a table at the Little Lemon Restaurant.</h2>
                <form>
                    <div>
                        <label for="name" style={{display: "flex"}}>Name: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
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
                        <label for="email" style={{display: "flex"}}>Email: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
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
                        <label for="email" style={{display: "flex"}}>Phone: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
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
                        <button>Next</button>
                    </div>
                </form>
            </div>
    );
}

export default Reservation;