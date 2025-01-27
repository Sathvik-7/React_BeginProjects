import React from 'react'
import {accordionData} from './utils/content.js'
import Accordion from './component/Accordion.jsx'

const App = () => {
  return (
    <div className='accordion'>
      {
        accordionData.map(({title,content}) => (
                     <Accordion title={title} content={content} key={Math.random()} />))
      }
    </div>
  )
}

export default App