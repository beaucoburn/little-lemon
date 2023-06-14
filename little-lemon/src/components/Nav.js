import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const navLinks = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "About",
        url: "/",
    },
    {
        text: "Menu",
        url: "/",
    },
    {
        text: "Reservations",
        url: "/reservation",
    },
    {
        text: "Order Online",
        url: "/",
    },
]


function Nav() {

    const navList = navLinks.map((navLinks) => {
        return (
            <li><Link to={navLinks.url} className="nav-item" alt="">{navLinks.text}</Link></li>
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