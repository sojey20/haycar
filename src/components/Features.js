import React from 'react';
import './Cards.css';

function Features() {
  return (
      <div className="features">
        <h1 className='title'>Features</h1>
        <section className="container">
          <div>
            <img className="icon" src="images/new-xxl.png" />
            <a href="#" className="link-icon">New Cars</a>
          </div>
          <div>
            <img className="icon" src="images/twitch-tv-2-xxl.png" />
            <a href="#" className="link-icon">Advertising</a>
          </div>
          <div>
            <img className="icon" src="images/sale-2-xxl.png" />
            <a href="#" className="link-icon">best selling</a>
          </div>
        </section>
      </div>
  );
}

export default Features;
