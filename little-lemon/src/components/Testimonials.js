import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return (
            <div>
                <h1>Testimonials</h1>
                <div style={{display: "flex"}}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
    );
  }
  
  export default Testimonials;