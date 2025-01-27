import React, { useState } from 'react'
import '../style.css'

const Accordion = ({title,content}) => {

    const [isActive , setIsActive] = useState(false)
    
    return (
        <section className="accordion-card" >
          <div className="header" onClick={()=>setIsActive(!isActive)}>
            {title}
            <p className="icon">{isActive ? '-' : '+'}</p>
          </div>
          <div className='content'>
            {isActive && <p className='card-info'>{content}</p> }
          </div>
        </section>
  )
}

export default Accordion