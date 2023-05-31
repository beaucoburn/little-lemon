import CardDisplay from "./CardDisplay.js";
import Testimonials from "./Testimonials.js";

function Main() {
    return (
        <main>
                <div style={{display: "flex"}}>
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
                </div>
                <CardDisplay />
                <Testimonials />
        </main>
    );
  }
  
  export default Main;