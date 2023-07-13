import React from 'react'
import './Footer.css';
import footerlogo from '../../assets/footerlogo.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import allRights from "../../assets/allRightIcon.svg"


const Footer = () => {

  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_section1">
          <img src={footerlogo} alt="footerlogo"/>
          <h4>Mail</h4>
          <h2>icomc24@iitk.ac.in</h2>
          <h4>Venue</h4>
          <h2>Fatehbad Road, Agra 282004 India</h2>
          <h4>Map</h4>
          <div className="footer_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.4127336728034!2d77.96430017431743!3d27.14330135014507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974777724a119dd%3A0xcee961fc18d7657d!2sJ.p%20Palace!5e0!3m2!1sen!2sin!4v1685444264063!5m2!1sen!2sin" 
              width="100%" 
              height="180" 
              style={{border: "0",maxWidth:"440px"}}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              className="google_map">
            </iframe>
          </div>
            <div className="all_rights_reserve">

  <img src={allRights} alt="" />
 &nbsp; <p>2023 All Rights Reserved</p>
            </div>
        </div>


        <div className="footer_section2">
          <h3>Subscribe Our Newsletter</h3>
          <div className="footer_subscribe">
            <input type="email" placeholder="Email"/>
            <button type="button">Subscribe</button>
          </div>
          <h3>Follow Us</h3>
          <div className="footer_button">
            <img src={linkedin} alt="linkedin" className="lft"/>
            <img src={facebook} alt="facebook" className="lft"/>
            <img src={twitter} alt="twitter" className="lft"/>

          </div>
        </div>
      </div>

    

      
      
    </div>
  )
}

export default Footer

