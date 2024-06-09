import React from "react";
import "./AboutusStyle.css";
import bimg from "../assents/logo5.png";
import Aztek from "../assents/aztekrobotics.png"
import Secrypto from '../assents/SeCrypto.png'
import geoturkey from '../assents/GEO TURKEY.png'

function AboutusSec() {
  return (
    <div className="Aboutus">
      <div className="head-05">
        <h1>About Us</h1>
        <p>
          At Pawands.co, we are passionate about helping businesses thrive in
          the digital landscape. Our mission is to empower organizations of all
          sizes to reach their full online potential, driving growth and
          achieving success through effective website marketing strategies.
        </p>
      </div>
      <hr></hr>

      <div className="head-15">
        <div className="left">
          <h1>Who We Are</h1>
          <p>
            We are a team of dedicated and experienced professionals with a deep
            understanding of the ever-evolving digital marketing world. Our
            journey began with a simple idea: to assist businesses in
            establishing a strong online presence, enhancing their brand image,
            and generating sustainable leads. Today, we are proud to have helped
            numerous clients transform their online visibility and achieve
            remarkable results.
          </p>
        </div>
        <div className="right">
          <img src={bimg} alt="img"></img>
        </div>
      </div>

      <div className="Section-2">
        <h1>What We Do</h1>
        <p>
          Our core expertise lies in crafting custom-tailored website marketing
          solutions that cater to your unique needs. Whether you're a startup
          seeking to make a mark, an established business aiming to expand your
          digital footprint, or anything in between, we've got you covered.
          
        </p>
        <div className="container">
          <div className="row">
            <div className="col-4">Search Engine Optimization (SEO)</div>
            <div className="col-4">Pay-Per-Click (PPC) Advertising:</div>
            <div className="col-4">Social Media Marketing</div>
            <div className="col-4">Web Design and Development</div>
            <div className="col-4">Analytics and Reporting</div>
            <div className="col-4">Shopify Page Design</div>
          </div>
        </div>
        <h1>Our Trusted Companies</h1>
     
        <div className="row companies">
        <div className="col-6"><img src={Aztek}></img></div>
        <div className="col-6"><img src={geoturkey}></img></div>
        </div>
        </div>
      </div>
 
  );
}

export default AboutusSec;
