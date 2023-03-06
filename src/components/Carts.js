import React from "react";
import { Link } from "react-router-dom";
import { Cart, useCart } from "react-use-cart";
import "../css/carts.css";



const Carts = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    console.log(items);

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>


    return (
        <div>

            <section className="py-4 container">

                <br /><br /> <br />

                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">

                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <table className="table table-light table-hover m-0">
                                        <tbody>
                                            <tr>

                                                <th class="fontT">Image</th>
                                                <th class="fontT">Name</th>
                                                <th class="fontT">Price</th>
                                                <th class="fontT">Quantity</th>
                                                <th class="fontT" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    Remove&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    Delete</th>

                                            </tr>
                                            <tr>
                                                <th><hr /></th>
                                                <th><hr /></th>
                                                <th><hr /></th>
                                                <th><hr /></th>
                                                <th><hr /></th>
                                            </tr>
                                            {
                                                items.map((item, index) => {
                                                    return (
                                                        <tr key={index} >
                                                            <td>
                                                                <img src={item.imagePath} style={{ height: '11rem' }} />
                                                            </td>
                                                            <td class="fontZ">{item.productName}</td>
                                                            <td class="fontZ">{item.price}</td>
                                                            <td class="fontZ">Quantity({item.quantity})</td>
                                                            <td>
                                                                &nbsp;
                                                                <button className="btn btn-default ms-2"
                                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </button>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <button className="btn btn-default ms-2"
                                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                                    <i class="fa-solid fa-minus"></i>
                                                                </button>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>
                                                                    <i class="fas fa-trash fa-lg"></i></button>
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-1">

                        </div>
                        <div class="col-sm-2">

                            <div class="card" style={{ width: "30rem" }}>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        <div class="p-3 border bg-light">Summary</div></h2>
                                    <br />
                                    <div class="container">
                                        <div class="row">
                                            <div class="col" style={{ textAlign: "left" }} >
                                                <p class="cart-text fontT">Total Items</p>
                                                <p class="cart-text fontT">Products Price</p>
                                                <hr />
                                                <p class="cart-text fontT"><b>Total Amount</b></p>
                                            </div>
                                            <div class="col" style={{ textAlign: "right" }} >
                                                <p class="cart-text fontT">{totalItems}</p>
                                                <br/>
                                                <p class="cart-text fontT">₹{cartTotal}</p>
                                                <hr />
                                                <p class="cart-text fontT"><b>₹{cartTotal}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container">
                                    </div>
                                    <Link to="/login" style={{ color: "white", textDecoration: 'none' }} ><button className="btn btn-default m-2" >Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-1">

                        </div>
                    </div>
                </div>
            </section>

            <div class="container text-left">
                <div class="row">
                    <div class="col-sm-12" style={{paddingLeft:"710px"}}>
                        <h5>Cart : {totalUniqueItems}</h5>
                        <br/>
                        <h5> Total Items : {totalItems}</h5>
                    </div>
                    {/* <div class="col">

                    </div> */}
                </div>
            </div>
            
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-12" style={{paddingLeft:"200px"}}>
                        <button className="btn btn-danger m-2" onClick={() => emptyCart()}> Clear Cart </button>
                    </div>
                    {/* <div class="col">
                    </div> */}
                </div>
            </div>

            
        </div>
    );
}


export default Carts;