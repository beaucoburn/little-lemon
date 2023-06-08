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
            <img src={restaurant} alt="Restaurant" />
            <div>
                <h1>
                    Doormat <br />
                    Navigation
                </h1>
                <ul className="navLink">
                    {doormatList}
                </ul>
            </div>
            <div>
                <h1>
                    Contact
                </h1>
                <ul className="navLink">
                    {contactList}
                </ul>
            </div>
            <div>
                <h1>
                    Social Media <br />
                    Links
                </h1>
                <ul className="navLink">
                    {socialMediaList}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;