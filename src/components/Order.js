import React from "react"
import Axios from "axios";
class Order extends React.Component {


    constructor(props) {
        super(props)

    }

    Handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    myfunc(e) {
        e.preventDefault()
        // console.log(this.state) ;
        console.log(this.state);
        //  var abc =this.state;
        console.log(this.state);

        var customer = JSON.parse(localStorage.getItem("abc"));
        console.log(customer);
        var custId = customer[0].custId;
        console.log(custId);

        var product = JSON.parse(localStorage.getItem("react-use-cart"));
        console.log(product);
        var productId = product.items[0].id
        var cartTotal = product.cartTotal;
        var quantity = product.totalItems;

        var date = localStorage.getItem("Date");

        console.log(quantity);

        console.log(date);
        console.log(cartTotal);
        console.log(productId);

        var Order = {
            custId: custId,
            productId: productId,
            totalCost: cartTotal,
            quantity: quantity,
            orderDate: date
        }

        console.log(Order);
        Axios.post('http://localhost:8081/paintshop/order/addOrd', Order)
            .then(res => {

                console.log(res);
                var obj = JSON.parse(res);
                console.log(obj);


                window.location("http://localhost:3000/invoice")

            });
    }


    render() {

        return (

            <div>

                <h1>Make Payment</h1>

                <span style={{paddingRight:"0px"}}>
                    <button type="submit" class="btn btn-secondary" style={{ width: "100px" }} onClick={(ev) => { this.myfunc(ev) }}>Pay</button>
                </span>

            </div>

        );
    }
}


export default Order;