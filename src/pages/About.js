import React, { Component } from 'react';
import "./About.css";
import pic from "../assets/pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
             <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rotimi Awani</div>
            <div className="brief_description">
              I am a software engineer at IBM
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}