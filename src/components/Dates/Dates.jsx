import React from 'react'
import './Dates.css';
import { calender } from '../SVG/Dates';


const Dates = () => {

  return (
    <div className="dates_container">
        <div className="dates_content">
            <h2>CONFERENCE IMPORTANT DATES</h2>
            <div className="rectangle"></div>
        </div>
        <h1 style={{textAlign:"center",padding:"2rem",color:"rgb(0,0,0,0.3)",fontSize:"1.5rem"}}>{"Coming Soon ..."}</h1>
        {/* <div className="dates_calendar">
            <div className="date1">
               {calender}
                <h3>June 1, 2024</h3>
                <p>Lorem ipsum dolor sit amet. Nisi imperdiet ullamcorper ut non.</p>
            </div>
            <div className="date1">
                {calender}
                <h3>June 1, 2024</h3>
                <p>Lorem ipsum dolor sit amet. Nisi imperdiet ullamcorper ut non.</p>
            </div>
            <div className="date1">
               {calender} 
                <h3>June 1, 2024</h3>
                <p>Lorem ipsum dolor sit amet. Nisi imperdiet ullamcorper ut non.</p>
            </div>
            <div className="date1">
               {calender} 
                <h3>June 1, 2024</h3>
                <p>Lorem ipsum dolor sit amet. Nisi imperdiet ullamcorper ut non.</p>
            </div>

        </div> */}
      
    </div>
  )
}

export default Dates