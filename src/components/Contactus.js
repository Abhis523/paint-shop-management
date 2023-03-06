import React from 'react'
import"../css/Contactus.css";

function Contactus() {
    return (
                                                    
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="Scriptcontent">

                            <div>
                                <div class="container">
                                    <div class="contact-parent">
                                        <div class="contact-child child1">
                                            <p>
                                                <i class="fas fa-map-marker-alt"></i> Address <br />
                                                <span>Chhatrapati Shivaji Maharaj Chowk,Latur
                                                    <br />
                                                    Maharasthra, India
                                                </span>
                                            </p>

                                            <p>
                                                <i class="fas fa-phone-alt"></i> Let's Talk <br />
                                                <span> 9834361639</span>
                                            </p>

                                            <p>
                                                <i class=" far fa-envelope"></i> General Support <br />
                                                <span>shreepaint@gmail.com</span>
                                            </p>
                                        </div>

                                        <div class="contact-child child2">
                                            <div class="inside-contact">
                                                <h2>Contact Us</h2>
                                                <h3>
                                                    <span id="confirm"></span>
                                                </h3>

                                                <p>Name *</p>
                                                <input id="txt_name" type="text" Required="required" />

                                                <p>Email *</p>
                                                <input id="txt_email" type="text" Required="required" />

                                                <p>Phone *</p>
                                                <input id="txt_phone" type="text" Required="required" />

                                                <p>Subject *</p>
                                                <input id="txt_subject" type="text" Required="required" />

                                                <p>Message *</p>
                                                <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>

                                                <input type="submit" id="btn_send" value="SEND" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

      
    )
}

export default Contactus