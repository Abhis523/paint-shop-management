import React, { Component } from 'react'
import '../css/Footer.css'

export default class  extends Component {
  render() {
    return (
      <div className='footer container fixed'>
           <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

    

    <div class="credit"> All rights reserved </div><span style={{"fontSize":"1.5rem"}}>@Morya-Paints</span>




      </div>
    )
  }
}
