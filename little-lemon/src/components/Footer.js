import restaurant from "../assets/restaurant2.jpg";
import { Link } from "react-router-dom";

const doormat = [
    {
        text: "Home",
        url: "/",
        key: "home",
    },
    {
        text: "About",
        url: "/",
        key: "about",
    },
    {
        text: "Menu",
        url: "/",
        key: "menu",
    },
    {
        text: "Reservations",
        url: "/reservation",
        key: "reservations",
    },
    {
        text: "Order Online",
        url: "/",
        key: "order",
    },
    {
        text: "Login",
        url: "/",
        key: "login",
    },
]

const contact = [
    {
        text: "Address",
        url: "/",
        key: "address1",
    },
    {
        text: "Phone Number",
        url: "/",
        key: "phone1",
    },
    {
        text: "Email",
        url: "/",
        key: "email1",
    },
]

const socialMedia = [
    {
        text: "Address",
        url: "/",
        key: "address2",
    },
    {
        text: "Phone Number",
        url: "/",
        key: "phone2",
    },
    {
        text: "Email",
        url: "/",
        key: "email2",
    },
]

function Footer() {

    const doormatList = doormat.map((doormat) => {
        return (
            <li key={doormat.key}><Link to={doormat.url} className="nav-item" alt="">{doormat.text}</Link></li>
        );
    });

    const contactList = contact.map((contact) => {
        return (
            <li key={contact.key}><Link to={contact.url} className="nav-item" alt="">{contact.text}</Link></li>
        );
    });

    const socialMediaList = socialMedia.map((socialMedia) => {
        return (
            <li key={socialMedia.key}><Link to={socialMedia.url} className="nav-item" alt="">{socialMedia.text}</Link></li>
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