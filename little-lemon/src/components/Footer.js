import restaurant from "../assets/restaurant2.jpg";
import { Link } from "react-router-dom";

const doormat = [
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
    {
        text: "Login",
        url: "/",
    },
]

const contact = [
    {
        text: "Address",
        url: "/",
    },
    {
        text: "Phone Number",
        url: "/",
    },
    {
        text: "Email",
        url: "/",
    },
]

const socialMedia = [
    {
        text: "Address",
        url: "/",
    },
    {
        text: "Phone Number",
        url: "/",
    },
    {
        text: "Email",
        url: "/",
    },
]

function Footer() {

    const doormatList = doormat.map((doormat) => {
        return (
            <li><Link to={doormat.url} className="nav-item" alt="">{doormat.text}</Link></li>
        );
    });

    const contactList = contact.map((contact) => {
        return (
            <li><Link to={contact.url} className="nav-item" alt="">{contact.text}</Link></li>
        );
    });

    const socialMediaList = socialMedia.map((socialMedia) => {
        return (
            <li><Link to={socialMedia.url} className="nav-item" alt="">{socialMedia.text}</Link></li>
        );
    });

    return (
        <footer className="footer">
            <img src={restaurant} alt="Restaurant" style={{width: "155px", height: "264px"}} />
            <div>
                <h5>
                    Doormat <br />
                    Navigation
                </h5>
                <ul
                    className="navLink"
                    style={{
                        fontFamily: 'Karla',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "#EDEFEE",
                        marginTop: "15px",
                        }} >
                    {doormatList}
                </ul>
            </div>
            <div>
                <h5>
                    Contact
                </h5>
                <ul
                    className="navLink"
                    style={{
                        fontFamily: 'Karla',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "#EDEFEE",
                        marginTop: "40px",
                        wordBreak: "break-all",
                        inlineSize: "150px",
                        }} >
                    {contactList}
                </ul>
            </div>
            <div>
                <h5 style={{ width: "180px"}}>
                    Social Media <br />
                    Links
                </h5>
                <ul
                    className="navLink"
                    style={{
                        fontFamily: 'Karla',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "#EDEFEE",
                        marginTop: "15px",
                        }} >
                    {socialMediaList}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;