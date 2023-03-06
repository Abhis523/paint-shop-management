import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';


function Payment() {

    const [data, setData] = useState({ cardNumber: "", cardExpiryDate: "", cardCVV: "", cardHolderName: "" });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            cardNumber: data.cardNumber,
            cardExpiryDate: data.cardExpiryDate,
            cardCVV: data.cardCVV,
            cardHolderName: data.cardHolderName
        };

        axios.post("http://localhost:8045/app/payment/save", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
        });
    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/invoice`;
        navigate(path);
    }




    return (
        <div>

            <section style={{ "background-color": "#eee" }}>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-4">
                            <div class="card rounded-3">
                                <div class="card-body mx-1 my-2">

                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col-sm">
                                                <i class="fab fa-cc-visa fa-2x text-black pe-3"></i>
                                            </div>
                                            <div class="col-sm">
                                                <i class="fa-brands fa-cc-mastercard fa-2x text-black pe-3"></i>
                                            </div>
                                            <div class="col-sm">
                                                <i class="fa-brands fa-cc-amex fa-2x text-black pe-3"></i>
                                            </div>
                                            <div class="col-sm">
                                                <i class="fa-brands fa-cc-paypal fa-2x text-black pe-3"></i>
                                            </div>
                                        </div>

                                    </div>

                                    <br /><br />

                                    <div class="container text-center">
                                        <form onSubmit={handleSubmit} >
                                            <div class="row text-center">
                                                <div class="row">
                                                    <div class="mb-3">
                                                        <h6><b>CARD NUMBER</b></h6>
                                                        <input onChange={handleChange} value={data.cardNumber} name="cardNumber" type="text" class="form-control" placeholder="•••• •••• •••• ••••" required />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm">
                                                        <h6><b>EXPIRY DATE</b></h6>
                                                        <input onChange={handleChange} value={data.cardExpiryDate} name="cardExpiryDate" type="date" class="form-control" placeholder="•• / ••" required />
                                                    </div>
                                                    <div class="col-sm">
                                                        <h6><b>CVV</b></h6>
                                                        <input onChange={handleChange} value={data.cardCVV} name="cardCVV" type="password" class="form-control" placeholder="•••" required />
                                                        <br />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="mb-3">
                                                        <h6><b>CARD HOLDER NAME</b></h6>
                                                        <input onChange={handleChange} value={data.cardHolderName} name="cardHolderName" type="text" class="form-control" aria-label="cardholdername" required />
                                                    </div>
                                                </div>

                                                <div class="d-flex justify-content-between align-items-center pb-1">
                                                    <Link to="/cart" class="text-muted">Go back</Link>
                                                    <button type="submit" class="btn btn-primary m-4" onClick={routeChange} > Pay Amount </button>
                                                    {/* <Link to="/invoice" style={{ color: "white", textDecoration: 'none'}}></Link> */}
                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Payment;


