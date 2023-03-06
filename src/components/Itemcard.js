import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {

    const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            
            {(console.warn(props.item))}

            <div class="col">
                <br /><br/>

                <div class="card" style={{ width: "24rem", border: "1px solid black" }}>
                    <img src={props.imagePath} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.productName}</h5>
                        <p class="card-text">₹ {props.price}</p>
                        <button class="btn btn-default" style={{}} onClick={ () => addItem(props.item) } >Add To Cart</button>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Itemcard;
