import React from 'react'
import "../style.css"
import { useState } from 'react'

const Test = () => {

    const [currentIndex,setCurrentIndex] = useState(0)
    
    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];

      const HandlePrev = () => 
        {
            setCurrentIndex(
                (currentIndex + testimonials.length - 1 ) % testimonials.length)
        }

      const HandleNext = () => 
        {
            setCurrentIndex(
                (currentIndex + 1 ) % testimonials.length)
        
        }
      

  return (
            <div className="testimonials">
                <div className="testimonials-quote">
                    {testimonials[currentIndex].quote}
                </div>
                <div className="testimonials-author">
                    - {testimonials[currentIndex].author}
                </div>
                <div className="testimonials-nav">
                    <button onClick={HandlePrev}>Prev</button>
                    <button onClick={HandleNext}>Next</button>
                </div>
            </div>
  )
}

export default Test