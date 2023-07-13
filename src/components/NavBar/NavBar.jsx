import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './NavBar.css';
import { arrow } from '../SVG/Dates';
import Header from '../Header/Header';



const Nav_Bar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [navigation,setNavigation] = useState(0) 

  return (
    <div onClick={()=>{
      setToggleMenu(false);
    }} className="LMS__navbar">
         <Header/>

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
        }} id={navigation == index ? "active" : ""} >{(item == "Programme")?<div style={{
          display:"flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap:"0.5rem"
        }}>{item} <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0509135 1.28177L5.69017 6.92103C5.69017 6.92103 6.40125 7.82322 7.27059 6.82846L12.5084 1.50945C12.7295 1.28466 12.8461 0.966983 12.7871 0.657097C12.7476 0.449146 12.6312 0.241527 12.3521 0.126936C11.6549 -0.159178 11.2366 0.298637 11.2366 0.298637L6.42754 5.12424L1.58454 0.298637C1.58454 0.298637 1.01134 -0.237491 0.453499 0.126936C-0.104336 0.491379 -0.019035 1.2117 0.0507017 1.28159" fill="#3B3B3B"/>
        </svg> </div>  : (item == "Useful Information") ? <div style={{
          display:"flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap:"0.5rem"

        }}>{item} <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0509135 1.28177L5.69017 6.92103C5.69017 6.92103 6.40125 7.82322 7.27059 6.82846L12.5084 1.50945C12.7295 1.28466 12.8461 0.966983 12.7871 0.657097C12.7476 0.449146 12.6312 0.241527 12.3521 0.126936C11.6549 -0.159178 11.2366 0.298637 11.2366 0.298637L6.42754 5.12424L1.58454 0.298637C1.58454 0.298637 1.01134 -0.237491 0.453499 0.126936C-0.104336 0.491379 -0.019035 1.2117 0.0507017 1.28159" fill="#3B3B3B"/>
        </svg> </div> : item }</p>
      })
          }
         
         
        </div>
      </div>
      
      <div className="LMS__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={(event) => {
            event.stopPropagation();
            setToggleMenu(false)}} />
          : <RiMenu3Line color="black" size={27} onClick={(event) => {
            event.stopPropagation()
            setToggleMenu(true)}} />}
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
        }} id={navigation == index ? "active" : ""} >{(item == "Programme")?<>{item} <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0509135 1.28177L5.69017 6.92103C5.69017 6.92103 6.40125 7.82322 7.27059 6.82846L12.5084 1.50945C12.7295 1.28466 12.8461 0.966983 12.7871 0.657097C12.7476 0.449146 12.6312 0.241527 12.3521 0.126936C11.6549 -0.159178 11.2366 0.298637 11.2366 0.298637L6.42754 5.12424L1.58454 0.298637C1.58454 0.298637 1.01134 -0.237491 0.453499 0.126936C-0.104336 0.491379 -0.019035 1.2117 0.0507017 1.28159" fill="#3B3B3B"/>
</svg> </>  : (item == "Useful Information") ? item + arrow : item }</p>
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





