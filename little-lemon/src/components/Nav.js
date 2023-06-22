import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const navLinks = [
    {
        text: "Home",
        url: "/",
        key: "home3",
    },
    {
        text: "About",
        url: "/about",
        key: "about3",
    },
    {
        text: "Menu",
        url: "/menu",
        key: "menu3",
    },
    {
        text: "Reservations",
        url: "/reservation",
        key: "reservations3",
    },
    {
        text: "Order Online",
        url: "/order",
        key: "order3",
    },
]


function Nav() {

    const navList = navLinks.map((navLinks) => {
        return (
            <li key={navLinks.url}><Link to={navLinks.url} className="nav-item" alt="">{navLinks.text}</Link></li>
        );
    });

    return (
        <nav>
            <Link to="/" className="nav-item"><img src={logo} alt="Logo" /></Link>
            <ul>
                {navList}
            </ul>
        </nav>
    );
  }
export default Nav;