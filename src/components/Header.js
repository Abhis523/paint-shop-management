import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/Header.css'
import '../css/Btn.scss'
 
export default class Header extends Component {
  render() {
    return (

      <div className='Header'>
        <div class="conatainer">

          <div class="container" style={{ paddingRight: "110px" }}>
            <div class="row">
              <div class="col-xl-3 abc">
                <img src="/images/logo1.png" width="150px" height="150px" alt="" />
              </div>
              <div class="col-xl-9 abc">

                <h1 className='xyz'> <span>Morya Paint & Consult </span></h1>
              </div>

            </div>
          </div>

          <div class="navbardiv container bg-light h23">
            <ul class="nav justify-content-center">

              <li class="nav-item">
                <Link class='nav-link' to='/'>Home</Link> &nbsp;&nbsp;&nbsp;
              </li>

              <li class="nav-item">
                <a class="nav-link"><Link to="/allproducts" style={{ color: "black", textDecoration: 'none' }} > Products </Link></a>
              </li>

              <li class="nav-item">
                <Link class='nav-link' to='/Facilities'>Our Services</Link> &nbsp;&nbsp;&nbsp;
              </li>

              <li class="nav-item">
                {/* <a class="nav-link">Activities </a>  */}
                <Link class='nav-link' to='/Activities'>Activities</Link> &nbsp;&nbsp;&nbsp;
              </li>

              {/* <li class="nav-item">
                <Link class='nav-link' to='/Packages'>Packages</Link> &nbsp;&nbsp;&nbsp;
              </li> */}

              <li class="nav-item">
                <Link class='nav-link' to='/About'>About</Link> &nbsp;&nbsp;&nbsp;
              </li>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li style={{ paddingTop: "5px" }}>
                <Link class='nav-link' to='/login'>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ "height": "50px;", "width": "80px" }}><i
                    class="fa-solid fa-right-to-bracket"></i> Login
                  </button>
                </Link>
              </li>

             

              <li style={{ paddingTop: "10px" }}>
                <div class="d-flex align-items-center">
                  <a class="text-reset me-3">
                    <Link to="cart" style={{ color: "black", textDecoration: 'none' }} ><i class="fas fa-shopping-cart fa-lg"></i></Link>
                  </a>
                </div>
              </li>

            </ul>

          </div>
        </div>

      </div>
    )
  }
}
