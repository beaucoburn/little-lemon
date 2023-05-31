import FoodCard from "./FoodCard";
function CardDisplay() {
    return (
            <div style={{display: "flex"}}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
    );
  }
  
  export default CardDisplay;