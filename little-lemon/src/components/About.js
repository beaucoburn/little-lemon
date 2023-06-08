import MarioAndAdrianA from "../assets/mario and adrian a.jpg";
import MarioAndAdrianB from "../assets/mario and adrian b.jpg";

function About() {
    return (
        <section style={{paddingTop: "80px 0px"}}>
            <div style={{
                display: "flex",
                width: "861px",
                height: "522px",
                margin: "135px 290px 88px 290px"
                }}>
                <div>
                    <h1 style={{color: "#495E57"}}>Little Lemon</h1>
                    <h2 style={{ color: "#495E57"}}>Chicago</h2>
                    <p style={{
                        marginTop: "40px",
                        fontFamily: "Karla",
                        color: "#333333",
                        fontSize: "18px",
                        width: "366px",
                        height: "128px"
                        }}>
                            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.  The restaurant features a locally-sourced menu with daily specials
                            </p>
                </div>
                <div style={{
                    position: "relative",
                    left: 0,
                    top: 0,
                    width: "440px",
                    height: "520px"
                    }}>
                    <img
                        src={MarioAndAdrianA}
                        alt="Mario and Adrian"
                        style={{
                            position: "relative",
                            top: 0,
                            left: "184px",
                            width: "256px",
                            height: "392px",
                            zIndex: "2",
                        }}/>
                    <img
                        src={MarioAndAdrianB}
                        alt="Mario and Adrian"
                        style={{
                            position: "absolute",
                            top: "128px",
                            left: 0,
                            width: "256px",
                            height: "392px",
                            zIndex: "1",
                        }}/>
                </div>
            </div>
        </section>
    );
  }
  
  export default About;