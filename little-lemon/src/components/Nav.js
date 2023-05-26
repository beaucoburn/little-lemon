import logo from "../assets/Logo.svg"

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
        url: "/",
    },
    {
        text: "Order Online",
        url: "/",
    },
    {
        text: "Login",
        url: "/",
    },
]


function Nav() {

    const navList = navLinks.map((navLinks) => {
        return (
            <li><a href={navLinks.url} alt="">{navLinks.text}</a></li>
        );
    });

    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                {navList}
            </ul>
        </nav>
    );
  }
export default Nav;