import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import HeroLogo from '../assets/logo.svg';
import HeroIllustration from '../assets/illustration-mockups.svg';


export default function HeroSection() {
  return (
    <main className='hero-container'>
      <div className='hero-header'>
        <div className="logo-container">
          <img src={HeroLogo} alt="Huddle" />
        </div>
      </div>
      <div className="hero-body">
        <div className="hero-illustration-container">
          <img src={HeroIllustration} alt="" />
        </div>
        <div className="hero-content-container">
          <div className="hero-text-container">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create conections with your users as you engage in genuine discussion.</p>
          </div>
          <button className="register-btn">Register Now!</button>
        </div>
      </div>
      <div className="hero-footer">
        <div className="hero-socials">
          <i className="hero-social-link">
            <FontAwesomeIcon icon={faFacebookF}/>
          </i>
          <i className="hero-social-link">
            <FontAwesomeIcon icon={faTwitter}/>
            </i>
          <i className="hero-social-link">
            <FontAwesomeIcon icon={faInstagram}/>
          </i>
        </div>
      </div>
    </main>
  )
}
