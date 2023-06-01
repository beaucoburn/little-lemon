import restaurantFood from "../assets/restauranfood.jpg";

function Header() {
    return (
        <header style={{display: "flex", flexDirection: "row"}}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img src={restaurantFood} alt="Server with plate of bruschetta." />
            </div>
        </header>
    );
  }
  
  export default Header;