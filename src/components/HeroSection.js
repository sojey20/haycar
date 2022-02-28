import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vidAfter1.mp4' autoPlay loop muted />
      <div className="action-container">
        <h1 style={{ marginTop:"-8rem"}}>MERCEDES ÁMG</h1>
        <div className="buttons">
          <input className="search" type="text" id="header-search" placeholder="Search blog posts" name="s" />
          <button type="submit" className="button1"><a href="">Search</a></button>
          {/* <button className="button2"><a href="">Ad Personam</a></button> */}
        </div>
      </div>
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
    </form>
      <div className="footer">
        <ul>
          <li><a href="">EMOTION</a></li>
          <li><a href="">DESIGN</a></li>
          <li><a href="">DRIVING</a></li>
          <li><a href="">TECHNICAL</a></li>
          <li><a href="">GALLERY</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
