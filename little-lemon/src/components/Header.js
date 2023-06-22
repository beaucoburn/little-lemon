import restaurantFood from "../assets/restauranfood.jpg";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={{display: "flex", flexDirection: "row"}}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reservation" className="nav-item" alt="Reserve a Table" ><button>Reserve a Table</button></Link>
            </div>
            <div>
                <img src={restaurantFood} alt="Server with plate of bruschetta." />
            </div>
        </header>
    );
}

export default Header;