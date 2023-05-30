import React from 'react'
import './Banner.css'
import agra from '../../assets/agra.png'
import taj from '../../assets/taj.png'
import jp from '../../assets/jp_palace.png'
import ss from '../../assets/Group 1.png'


const Banner = () => {
  return (
    <div className="banner_container ">
        <div className="banner_content">
            <h1>30<span>th</span> International Conference<br/>on Organometallic Chemistry</h1>
            <div className="banner_info ">
                
                <div className="conference">
                    <h4 >Conference Days</h4>
                    <h2>July 15-18,2024</h2>
                </div>
                <div className='Rectangle4'/>  
                <div className="venue">
                    <h4>Venue</h4>
                    <h2>Jaypee Palace,Agra</h2>

                </div>
            </div>
            <div className="button_group">
                <button className="register_button">Register</button>
                <button className="schedule_button">Schedule</button>
            </div>
            

        </div>
        <div className="banner_image">
            <img src={ss} alt='' />
            {/* <img src={agra} alt='' className="image1"/> */}
            {/* <img src={taj} alt='' className="image2"/>
            <img src={jp} alt='' className="image3"/> */}
        </div>



      
    </div>
  )
}

export default Banner
