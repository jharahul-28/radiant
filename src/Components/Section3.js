import React from 'react'
import img from './download3.png'
import '../scss/section.css'

function Section3() {
  return (
    <div className='section3'>
        <h4>Related deals you might like for</h4>
        <div className='deals'>
            <div className='deal'>
                <img src={img} alt='computer'/>
                <div className='details'>
                    <div className='line1'>
                        <p>20% Off</p>
                        <p>Limited Time</p>
                    </div>
                    <div className='name'>
                        <p>Webbuilder1</p>
                    </div>
                    <p>Computer Modern clasic with wix support</p>
                    <div className='price'>
                        <p className='price1'>$39.96</p>
                        <p className='price2'>$49.96</p>
                        <p className='discount'>20% Off</p>
                    </div>
                    <button>View Deal</button>
                </div>
            </div>

            <div className='deal'>
                <img src={img} alt='computer'/>
                <div className='details'>
                    <div className='line1'>
                        <p>20% Off</p>
                        <p>Limited Time</p>
                    </div>
                    <div className='name'>
                        <p>Webbuilder1</p>
                    </div>
                    <p>Computer Modern clasic with wix support</p>
                    <div className='price'>
                        <p className='price1'>$39.96</p>
                        <p className='price2'>$49.96</p>
                        <p className='discount'>20% Off</p>
                    </div>
                    <button>View Deal</button>
                </div>
            </div>

            <div className='deal'>
                <img src={img} alt='computer'/>
                <div className='details'>
                    <div className='line1'>
                        <p>20% Off</p>
                        <p>Limited Time</p>
                    </div>
                    <div className='name'>
                        <p>Webbuilder1</p>
                    </div>
                    <p>Computer Modern clasic with wix support</p>
                    <div className='price'>
                        <p className='price1'>$39.96</p>
                        <p className='price2'>$49.96</p>
                        <p className='discount'>20% Off</p>
                    </div>
                    <button>View Deal</button>
                </div>
            </div>
        </div>
        <div className='sign'>
            <p>Sign up and get exclusive special deals</p>
            <div className='field'>
                <div className='input'></div>
                <span>Sign Up</span>
            </div>
        </div>
    </div>
  )
}

export default Section3