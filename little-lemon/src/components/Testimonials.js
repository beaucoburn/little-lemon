import TestimonialCard from "./TestimonialCard";
import WomanOne from "../assets/WomanOne.jpg";
import ManOne from "../assets/ManOne.jpg";
import WomanTwo from "../assets/WomanTwo.jpg";
import ManTwo from "../assets/ManTwo.jpg";
import Star from "../assets/Star.jpg"

const testimonialInfo = [
    {
      id: "WomanOne",
      img: WomanOne,
      title: "Woman One",
    },
    {
      id: "ManOne",
      img: ManOne,
      title: "Man One",
    },
    {
      id: "WomanTwo",
      img: WomanTwo,
      title: "Woman Two",
    },
    {
      id: "ManTwo",
      img: ManTwo,
      title: "Man Two",
    },
  ];

const testimonialCards = testimonialInfo.map((testimonialCard) => {
    return (
        <div style={{ background: "#EDEFEE", borderRadius: "16px", width: "200px", height: "200px", padding: "25px 0px 0px 20px" }}>
            <div style={{ display: "flex", marginBottom: "10px" }}>
                <h3>Rating</h3>
                <img src={Star} alt="rating" style={{ height: "18px", marginLeft: "7px" }}/>
            </div>
            <div style={{ display: "flex" }}>
                <img src={testimonialCard.img} alt={testimonialCard.id} style={{ height: "66px", width: "58px" }} />
                <h3 style={{ padding: "20px 0px 0px 10px"}}>{testimonialCard.title}</h3>
            </div>
            <h3 style={{ paddingTop: "10px"}}>Product Review</h3>
        </div>
    );
})

function Testimonials() {
    return (
            <div style={{ background: "#495E57", paddingTop: "120px", paddingBottom: "120px"}}>
                <h1 style={{ color: "#F4CE14", textAlign: "center", marginBottom: "80px" }}>Testimonials</h1>
                <div style={{display: "flex"}}>
                    <TestimonialCard card={testimonialCards}/>
                </div>
            </div>
    );
}

export default Testimonials;