import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import profile_pic from '../../assets/profile_pic.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_pic} alt="" />
      <h1><span>I'm Mani Kumar,</span> 3rd Year Inormation Science Student in NMAM Institite of Technology Nitte.</h1>
      <p>A Full-Stack Webdeveloper specialized in React js, Node js and MySQL</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;