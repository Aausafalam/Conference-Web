import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Nav_Bar.css';

const Nav_Bar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navigation,setNavigation] = useState(0) 
  return (
    <div className="LMS__navbar">
      <div className="LMS__navbar-links">
        
        <div className="LMS__navbar-links_container">
          {
            ["Welcome","Organization",
         "Speakers","Registration","Programme",
         "Accommodation","Social Programme","Abstract",
       "Confrence Venue","Useful Information", "Tours","Partners & Exhibitors",
      "Contact"].map((item,index)=>{
        return  <p onClick={()=>{
          setNavigation(index)
        }} id={navigation == index ? "active" : ""} >{item}</p>
      })
          }
         
         
        </div>
      </div>
      
      <div className="LMS__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="LMS__navbar-menu_container scale-up-center">
          <div className="LMS__navbar-menu_container-links">
          {
            ["Welcome","Organization",
         "Speakers","Registration","Programme",
         "Accommodation","Social Programme","Abstract",
       "Confrence Venue","Useful Information", "Tours","Partners & Exhibitors",
      "Contact"].map((item,index)=>{
        return  <p onClick={()=>{
          setNavigation(index)
        }} id={navigation == index ? "active" : ""} >{item}</p>
      })
          }
          </div>
          
        </div>
        )}
      </div>
    </div>
  );
};

export default Nav_Bar;





// import './Nav_Bar.css'

// function Nav_Bar() {
//   return (
//     <nav className="navbar-container">
      
//       <ul className="navbar-menu">
//         <li className="navbar-menu-item">
//           <a href="#home">Home</a>
//         </li>
//         <li className="navbar-menu-item">
//           <a href="#about">About</a>
//         </li>
//         <li className="navbar-menu-item">
//           <a href="#program">Program</a>
//         </li>
//         <li className="navbar-menu-item">
//           <a href="#speakers">Speakers</a>
//         </li>
//         <li className="navbar-menu-item">
//           <a href="#registration">Registration</a>
//         </li>
//         <li className="navbar-menu-item">
//           <a href="#venue">Venue</a>
//         </li>
//         <li className="navbar-menu-item">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>

//     </nav>
//   );
// }

// export default Nav_Bar;