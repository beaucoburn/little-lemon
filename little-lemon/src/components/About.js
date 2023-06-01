import MarioAndAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAndAdrianB from "../assets/Mario and Adrian b.jpg";

function About() {
    return (
        <section>
            <div>
                <h1 style={{color: "#495E57"}}>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.  The restaurant features a locally-sourced menu with daily specials</p>
            </div>
            <div>
                <img src={MarioAndAdrianA} alt="" />
                <img src={MarioAndAdrianB} alt="" />
            </div>
        </section>
    );
  }
  
  export default About;