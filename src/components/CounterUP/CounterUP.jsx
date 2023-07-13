import React, {useState} from 'react'
import './CounterUP.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const CounterUP = () => {

  const [counterOn, setCounterOn] = useState(false)


  return (
    <div className="counter_container">
      <ScrollTrigger className="ScrollTrigger" onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
        < div className='scroll_trigger_wrapper'>
        <div className="days">
          <h1>03
            {/* {counterOn && <CountUp start={3} end={3} duration={2} delay={0} />} */}
            <br/><span>Days</span>
          </h1>
        </div>
        <div className="speaker">
          <h1>20
            {/* {counterOn && <CountUp start={20} end={20} duration={2} delay={0} />} */}
            +<br/> <span>Speakers</span>
          </h1>
        </div>
        <div className="country">
          <h1>6
            {/* {counterOn && <CountUp start={6} end={6} duration={2} delay={0} />} */}
            <br/> <span>Sessions</span>
          </h1>
        </div>
        <div className="college">
          <h1>250
            {/* {counterOn && <CountUp start={250} end={250} duration={2} delay={0} />} */}
            + <br/><span>Attendee </span>
          </h1>
        </div>
        </div>
        

      </ScrollTrigger>
      

      
    </div>
  )
}

export default CounterUP
