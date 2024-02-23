import React from 'react'
import '../scss/footer.css'

const Footer_1 = () => {
  return (
    <div className="main">
      <div className="category">
        <h3>CATEGORIES</h3>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div className="contact">
        <h3>CONTACT</h3>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms of Serice</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div className="country">
        <select name="country" id="country">
            <option value="India">India</option>
            <option value="US">US</option>
        </select>
      </div>
    </div>
  )
}

export default Footer_1