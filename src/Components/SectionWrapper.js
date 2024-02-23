import React from 'react'
import img from './download3.png'
import '../scss/sectionWrapper.css'

function SectionWrapper(props) {
  return (
    <>
      <div className='deal'>
        <img src={img} alt='computer' />
        <div className='details'>
          <div className='line1'>
            <p>{props.line1p1}</p>
            <p>{props.line2p2}</p>
          </div>
          <p>{props.headname}</p>
          <p>{props.descName}</p>
          <div className='price'>
            <p>{props.pricep1}</p>
            <p>${props.pricep1}</p>
            <p>{props.pricedis}</p>
          </div>
          <button>View Deal</button>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper