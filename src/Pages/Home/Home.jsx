import React from 'react'
import Nav_Bar from '../../components/NavBar/NavBar'
import Banner from '../../components/Banner/Banner'
import Welcome from '../../components/Welcome/Welcome'
import CounterUP from '../../components/CounterUP/CounterUP'
import Dates from '../../components/Dates/Dates'
import HorizontalScroll from 'react-scroll-horizontal'
import Footer from '../../components/Footer/Footer'
import Weather from '../../components/Weather/Weather'

const Home = () => {

    const parent  = { width: `100%`, height: `75vh`}

  return (
     <div className='home_page'>
       <Nav_Bar/>
      <Banner/>
      <Welcome/>
      <CounterUP/>
      <Dates/>
      <div style={parent}>
        <HorizontalScroll  reverseScroll = { true }>
             <Footer/>
          <Weather/>
           
        </HorizontalScroll>
      </div>
     </div>
  )
}

export default Home