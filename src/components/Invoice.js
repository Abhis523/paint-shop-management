import React from "react";
import { useCart } from "react-use-cart";
import '../css/Invoice.css';
import Order from "./Order";


function Invoice () {

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

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

   const logout=(e)=>
    {
        localStorage.clear();
        window.location = 'http://localhost:3000/';
    }

    return (
        <div>


            <div class="container">
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body p-0">
                                <div class="invoice-container">
                                    <div class="invoice-header">

                                        <div class="row gutters">
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div class="custom-actions-btns mb-5">
                                                    <a href="#" class="btn btn-default">
                                                        <i class="icon-download"></i> Download
                                                    </a>
                                                    <a href="#" class="btn btn-secondary">
                                                        <i class="icon-printer"></i> Print
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row gutters">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <p class="invoice-logo">
                                                    <span style={{fontSize:"20px","fontFamily":"'Times New Roman', Times, serif"}}>Invoice</span>
                                                </p>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <address class="text-right">
                                                <span class="fontE">Maxwell admin Inc, 45 NorthWest Street.</span><br />
                                                <span class="fontE">Sunrise Blvd, San Francisco.</span><br />
                                                <span class="fontE">00000 00000</span>
                                                </address>
                                            </div>
                                        </div>


                                        <div class="row gutters">
                                            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                                <div class="invoice-details">
                                                    <address>
                                                        <span class="fontD">Alex Maxwell</span><br />
                                                        <span class="fontD">150-600 Church Street, Florida, USA</span>
                                                    </address>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                                <div class="invoice-details">
                                                    <div class="invoice-num">
                                                        <div class="fontD">Invoice - #009</div>
                                                        <div class="fontD">{date}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="invoice-body">

                                        <div class="row gutters">
                                            <div class="col-lg-12 col-md-12 col-sm-12 ">
                                                <div class="table-responsive">
                                                    <table class="table custom-table m-0">
                                                        <thead>
                                                            <tr class="clrB">
                                                                <th class="fontI">Items</th>
                                                                <th class="fontI">Product ID</th>
                                                                <th class="fontI">Quantity</th>
                                                                <th class="fontI">Sub Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            items.map((item, index) => {
                                                            return(
                                                            <tr key={index} >
                                                            
                                                                <td class="fontD">{item.productName}</td>
                                                                <td class="fontD">{item.id}</td>
                                                                <td class="fontD">{item.quantity}</td>
                                                                <td class="fontD">{item.quantity * item.price}</td>
                                                            </tr>
                                                            )
                                                        })
                                                    }
                                                    </tbody>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                                <td colspan="2">
                                                                    <h5 class="text-success"><strong>Grand Total</strong></h5>
                                                                </td>
                                                                <td>
                                                                    <h5 class="text-success"><strong>₹{cartTotal}</strong></h5>
                                                                </td>
                                                            </tr>
                                                            
                                                         
                                                        
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="invoice-footer" style={{fontSize:"13px"}}>
                                        @Thank you for your Business.
                                    </div>
                                    <span style={{textAlign:"right"}}>< Order/></span>
                                </div>
                                <button onClick={logout}>Logout</button>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Invoice;