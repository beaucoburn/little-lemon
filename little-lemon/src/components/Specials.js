import React from "react";
import FoodCard from "./FoodCard";

const cardInfo = [
  {
    id: "GreekSalad",
    img: "../assets/greek salad.jpg",
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: "Bruchetta",
    img: "../assets/bruchetta.jpg",
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: "LemonDessert",
    img: "../assets/lemon dessert.jpg",
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const cards = cardInfo.map((card) => {
  return (
    <div key={card.id}>
      <img src={card.img} alt={card.title} />
      <div style={{ display: "flex" }}>
        <h3>{card.title}</h3>
        <p>{card.price}</p>
      </div>
      <p>{card.description}</p>
      <div>
        <p>Order a delivery</p>
      </div>
    </div>
  );
});

function Specials() {
  return (
    <div className="specials">
      <div style={{ display: "flex" }}>
        <h1>This week's specials!</h1>
        <button>Online Menu</button>
      </div>
      <div>
        <FoodCard card={cards} />
      </div>
    </div>
  );
}

export default Specials;
