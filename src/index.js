import React from 'react';
import ReactDOM from 'react-dom';

import { CartProvider } from "react-use-cart";
import './index.css';
import './js/script.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// ../node_modules/bootstrap/dist/css/bootstrap.min.css


// import { ToastContainer } from "react-toastify";
// import { CartProvider } from "react-use-cart";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AllProducts from "./components/AllProducts";
import Carts from "./components/Carts";
import Invoice from "./components/Invoice";
import Payment from "./components/Payment";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home.js';
import Login from './components/Login';

import Facilities from './components/Facilities';
import Activities from './components/Activities';
import About from './components/About';
import Rooms from './components/Rooms';
import Packages from './components/Packages';
import Order from './components/Order';
import Contactus from './components/Contactus';
import Weoffers from './components/weoffers';
import Register from './components/Register';
import Calculator from './components/Calculator';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


var content = (
  <div>
    <BrowserRouter>
      <div>
        <CartProvider>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/About" element={<About />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Packages" element={<Packages />} />
            {/* <Route path="/" element={< Homebody />} />
          <Route path="/homebody" element={< Homebody />} /> */}
            <Route path="/allproducts" element={< AllProducts />} />
            <Route path="/cart" element={< Carts />} />
            <Route path="/invoice" element={< Invoice />} />
            <Route path="/payment" element={< Payment />} />
            <Route path="/login" element={< Login />} />
            <Route path="/order" element={< Order />} />
            <Route path="/weoffers" element={< Weoffers />} />
            <Route path="/contactus" element={< Contactus />} />
            <Route path="/register" element={< Register />} />
            <Route path="/Calculator" element={< Calculator />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  </div>
)

ReactDOM.render(
  content,
  document.getElementById('root')
);


