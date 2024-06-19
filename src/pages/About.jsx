import React from 'react'
import '../styles/About.css'
import about from "../assets/about.jpg"

const About = () => {
  return (
    <div className="container">
      <img src={about} alt="About" className="about-img"/>
      <div className="texts">
        <span className="company">Car Rental Company</span>
        <p className="info">
          We are dedicated to providing our customers with exceptional car rental services that combine convenience, affordability, and reliability. Whether you're planning a weekend getaway, a business trip, or need a temporary vehicle, we have the perfect car to suit your needs.
        </p>
        <h5 className="mission-header">Company Mission:</h5>
        <p className="mission-text">
          Our mission is to make car rental a seamless and enjoyable experience for our customers. We strive to offer a wide range of high-quality vehicles, unparalleled customer service, and competitive pricing to ensure that your journey is as smooth as possible.
        </p>
      </div>
    </div>
  )
}

export default About