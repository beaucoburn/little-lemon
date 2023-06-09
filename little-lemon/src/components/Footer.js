import restaurant from "../assets/restaurant2.jpg"

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
            <li><a href={doormat.url} alt="">{doormat.text}</a></li>
        );
    });

    const contactList = contact.map((contact) => {
        return (
            <li><a href={contact.url} alt="">{contact.text}</a></li>
        );
    });

    const socialMediaList = socialMedia.map((socialMedia) => {
        return (
            <li><a href={socialMedia.url} alt="">{socialMedia.text}</a></li>
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
                        }} >
                    {contactList}
                </ul>
            </div>
            <div>
                <h5>
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
                        }} >
                    {socialMediaList}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;