import React from "react";
import '../Tools/Animations'
import "./ownerStyle.css";
import Sign from '../assents/R.talebi_cocosign.png'
import OwnerImg from '../assents/WhatsApp Image 2023-09-02 at 23.17.09.jpeg'

function Owner() {
  return (
    <div className="Owner">
      <div className="Container">
        <div className="row">
          <div className="col-6"><img id="owner-img" src={OwnerImg}/></div>
          <div className="col-6">
            <h1>
              A Multifaceted Professional Bridging<br></br> Software Engineering,<br></br>
              <span>Entrepreneurship</span> and Investment
            </h1>
            <h4>I am a highly versatile individual with expertise in software engineering,entrepreneurship, and investment. My strong foundation in coding and system design allows me to develop innovative tech solutions seamlessly. As an entrepreneur, I have successfully brought numerous innovative products to life, combining my technical skills with a keen business sense. Additionally, my role as an investor enables me to fuel the advancement of tomorrow’s groundbreaking technologies.</h4>
            <img className="sign" src={Sign}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
