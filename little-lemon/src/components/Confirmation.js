import Breadcrumb from "./Breadcrumb";

function Confirmation() {
    return (
            <div style={{ textAlign: "center", margin: "0px 290px 350px 290px"}}>
                <Breadcrumb />
                <h1 style={{ marginTop: "250px", color: "#333333"}}>Your Reservation is Confirmed!!</h1>
                <h2 style={{ marginTop: "175px", color: "#333333"}}>Thank you so much for reserving a table with us!</h2>
                <h2 style={{ marginTop: "50px", color: "#333333"}}>We look forward to you spending<br /> a wonderful time with us on your visit!</h2>
            </div>
    );
}

export default Confirmation;