import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import Weoffers from './weoffers'
import Footer from './Footer'


export default class extends Component {
    render() {
        return (
            <div className='Home  container'>
                <br />
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="100">
                            <img src="/images/Paint/crou5.jpg" class="d-block w-100 h-80" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "whitesmoke" }}>A Colorfull Homes Stores</h2>
                                <h1>One Step For All Your Paint Needs</h1>

                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/Paint/crou6.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "whitesmoke" }}>Colorfull Experience with</h2>
                                <h1>Our Digital and Intelligent Solutions</h1>
                                <h3 style={{ color: "whitesmoke" }}>We help you to paint your dreams</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/images/Paint/crou7.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "whitesmoke" }}>Reinvent Client Experience with</h2>
                                <h1 style={{ color: "black" }}>Our Paint Consultansy and Expert Software Solutions</h1>
                                <h3 style={{ color: "whitesmoke" }}>Where quality meets affordability</h3>

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <br />

                {/* ----------------Adventure Idea------------- */}
                <br />


                <section class="products" id="products">
                    <br />
                    <h1 class="Heder"> Exclusive services ... ! </h1>
                    <br />

                    <div class="box-container">

                        <div class="box card">

                            <div class="image">
                                <img src="/images/Paint/calc.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3 class="head">Colour Calculator</h3>
                                <div >
                                    <h4 class="description" >Paint Calculator helps you calculate the area to be painted and gives you an estimate of the required amount of paint. Paints can be applied with a brush or roller, or by dipping, flowcoating, spraying, hot spraying, electrostatic spraying, airless spraying, electrodeposition, powder coating, vacuum impregnation, immersion, and so on.</h4>
                                </div>

                                <Link to='/Calculator'><button type="button" class="btn btn-default">Try Now</button></Link>
                                <br />    <br />

                            </div>
                        </div>

                        <div class="box card">

                            <div class="image">
                                <img src="/images/Paint/picker.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3 class="head">Colour Picker</h3>
                                <div>
                                    <h4 class="description" >Color selection charts present a palette of available colors to aid the selection of spot colors, process colors, paints, pens, crayons, and so on – usually the colors are from a manufacturers product range.</h4>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <br /><br /><br />
                                <Link to='/Activities'><button type="button" class="btn btn-default">Try Now</button></Link>
                                <br /><br />
                            </div>
                        </div>

                        <div class="box card">

                            <div class="image">
                                <img src="/images/Paint/crack.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3 class="head">Crack & Leackage Guidance</h3>
                                <h4 class="description" > Ceiling leaks can signal the presence of a larger problem lurking in the attic, roof, or upper floors. Identifying the ceiling leak, tracing it to its origin, and stopping it must all be done before repairing the ceiling.</h4>
                            </div>
                            <br /><br /><br />
                            <Link to='/Activities'><button type="button" class="btn btn-default">Explore More</button></Link>
                            <br /><br />
                        </div>
                    </div>




                </section>
                {/* ---------------------What we offers------------------------  */}

                {/* <br />
                <section class="services">

                    <h1 class="Heder"> what we offer </h1>
                    <br />
                    <div class="box-container">

                        <div class="box">
                            <img src="images/serv-1.png" alt="" />
                            <h3>complete guide</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        <div class="box">
                            <img src="images/serv-2.png" alt="" />
                            <h3>custom packages</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        <div class="box">
                            <img src="images/serv-3.png" alt="" />
                            <h3>family trips</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        <div class="box">
                            <img src="images/serv-4.png" alt="" />
                            <h3>train guides</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        <div class="box">
                            <img src="images/serv-5.png" alt="" />
                            <h3>adventure trail</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        <div class="box">
                            <img src="images/serv-6.png" alt="" />
                            <h3>various adventures</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                    </div>

                </section> */}

                {/* <!-- review section starts  --> */}
                <br /><br /><br />

                <section class="review" id="review">

                    <h1 class="Heder"> Our Team </h1>
                    <br />
                    <div class="box-container">

                        <div class="box">
                            {/* <img src="/images/quote-img.png" alt="" class="quote" /> */}
                            <img src="/images/pic-1.jpeg" class="user" alt="" />
                            <p style={{"color":"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <h3>Pranav Jungare</h3>
                            <span style={{ "fontSize": "15px", "color": "gray" }}>PROJECT LEADER</span>
                            {/* <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div> */}
                        </div>

                        <div class="box">
                            {/* <img src="/images/quote-img.png" alt="" class="quote" /> */}
                            <img src="/images/pic-2.jpeg" class="user" alt="" />
                            <p style={{"color":"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <h3>Vinay Taware</h3>
                            <span style={{ "fontSize": "15px", "color": "gray" }}>SPRING BOOT HEAD</span>
                            {/* <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div> */}
                        </div>

                        <div class="box">
                            {/* <img src="/images/quote-img.png" alt="" class="quote" /> */}
                            <img src="/images/pic-3.jpeg" class="user" alt="" />
                            <p style={{"color":"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <h3>Ojas Nampurkar</h3>
                            <span style={{ "fontSize": "15px", "color": "gray" }}>WEB HEAD</span>
                            {/* <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div> */}
                        </div>

                        <div class="box">
                            {/* <img src="/images/quote-img.png" alt="" class="quote" /> */}
                            <img src="/images/pic-3.jpeg" class="user" alt="" />
                            <p style={{"color":"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <h3>Mayur Patil</h3>
                            <span style={{ "fontSize": "15px", "color": "gray" }}>DATABASE HEAD</span>
                            {/* <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div> */}
                        </div>

                    </div>

                    < Weoffers />
                    {/* <Footer/> */}

                </section>

                
                {/* ---------------------patners-------------------------- */}
                {/* <section class="patners">

                    <div class="share">
                        <img src="/images/client-logo-1.png" alt="" />
                        <img src="/images/client-logo-2.png" alt="" />
                        <img src="/images/client-logo-3.png" alt="" />
                        <img src="/images/client-logo-4.png" alt="" />
                    </div>


                </section> */}

                <Footer/>
            </div>
        )
    }
}
