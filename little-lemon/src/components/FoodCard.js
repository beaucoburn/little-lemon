function FoodCard(props) {
    return (
            <div style={{ display: "flex", gap: "26px" }}>
                {props.card}
            </div>
    );
}

export default FoodCard;