import React, { useState } from "react";
import Video from "../assents/head11.jpg";
import "./reservationstyle.css";
import axios from 'axios'


var isOpen = false;
function ResToOpenClick() {
  document.getElementById("Forms").style.display = "block";
  isOpen = true;
  document.getElementById("btn1").style.display = "none";
}


function Reservation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [businessType, setBusinessType] = useState("");
  
   
    function RezervationClick() {
      
    }
  
  
  
  return (
    <div className="Resevation">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h3>
              SCHEDULE FREE 20 MINIUTE{" "}
              <span style={{ color: "#FFD700" }}>MEETING</span>
            </h3>
            <p>
              As a result of this 20-minute conversation, we will have
              effectively planned and prepared to provide you with the best and
              most accurate support and opportunities. From there, your success
              will be entirely your own achievement.
            </p>
            <button
              onClick={ResToOpenClick}
              className="button-86"
              id="btn1"
              role="button"
            >
              Book a Call
            </button>

            <form name="mtForm" id="Forms">

              <div className="mb-3">
                <label className="form-label">
                  Your Name
                </label>
                <input
                  value={name}
                  type="text"
                  className="form-control"
                  name="NameI"
                  onChange={(e) => setName(e.target.value)}
             
                
                />
              </div>


              <div class="mb-3">
                <label  className="form-label">
                  Your Email Address
                </label>
                <input
                 value={email}
                  type="email"
                  class="form-control"
                  name="EmailI"
                  onChange={(e) => setEmail(e.target.value)}
                
                />
              </div>


              <div class="mb-3">
                <label className="form-label">
                  Which Business type you Want to Inform About
                </label>
                <input
                 value={businessType}
                  type="text"
                  class="form-control"
                  name="BusinessI"
                  onChange={(e) => setBusinessType(e.target.value)}
                
                />

                <br></br>
                <button
                    onClick={RezervationClick}
                  className="button-86"
                  id="btn2"
                  role="submit"
                >
                  Send a Reservation
                </button>
              </div>
            </form>


          </div>
          <div className="col col-img">
            <img src={Video}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
