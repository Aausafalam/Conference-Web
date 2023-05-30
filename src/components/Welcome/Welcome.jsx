import React from 'react'
import welcomeimg from '../../assets/welcomegrp.png'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome_container" id="welcome">
        <div className="welcome_content">
            <div className="welcome_heading">
                <h4>Welcome</h4>
            </div> 
            <p>On behalf of the Organizing Committee, we cordially invite you to the <span>30th International Conference on Organometallic Chemistry </span>(ICOMC-2024), which will be held in Agra, India, on <span>July 15-18, 2024</span> . ICOMC 2024 is aimed to provide an opportunity to present and discuss results from all fields of modern organometallic chemistry in an international and friendly environment. The scientific program will be organized in parallel sessions, focused on various aspects of both traditional and newly emerging areas of organometallic chemistry and related fields. Student attendance will be supported by reduced fees and the students will be given a chance to showcase their results during poster sessions.</p>  
        </div>
        <div className="welcome_image">
            <img src={welcomeimg} alt="welcomeImg" className="image"/>
        </div>

        
        
   </div>
  )
}

export default Welcome
