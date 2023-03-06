import React from 'react'
import '../css/About.css'
import { Link } from 'react-router-dom'

function Aboutus() {
    return (
        <body>
            <div class="container">
            <div class="about">
                <div class="inner-section">
                    <h1>About Us</h1>
                    <h3><p class="text">
                    Morya Paint is a leading manufacturer of high performance paints, primers, and clearcoats for automotive, power sports, and industrial markets.</p></h3>
                    <div class="skills">
                        
                        <Link  to='/contactus'><button>Contact Us</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </body>
    )
}

export default Aboutus