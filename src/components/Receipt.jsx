function Receipt(props) {
    return(
        <div className="Receipt">
            <h2>{Receipt.person}</h2>
            <h3><span className="OrderCatergory">Main</span>{receipt.order.main}</h3>
            <h3><span className="OrderCategory">Protein: </span>{receipt.order.protein}</h3>
            <h3><span className="OrderCategory">Rice: </span>{receipt.order.rice}</h3>
            <h3><span className="OrderCategory">Sauce: </span>{receipt.order.sauce}</h3>
            <h3><span className="OrderCategory">Toppings: </span>{getToppings(receipt.order.toppings)}</h3>
            <h3><span className="OrderCategory">Drink: </span>{receipt.order.drink}</h3>
            <h3><span className="OrderCategory">Cost: </span>{receipt.order.cost}</h3>
        </div>
    );
}

function getToppings(toppings){
    return toppings.join(', ');
}

export default Receipt;