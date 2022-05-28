import React from 'react';
import './styles.scss';

export default function JoinUs() {
  return (
    <div className="join-us-content">
      <h4>Newsletter</h4>
      <h2>JOIN US</h2>
      <p>
        The world is changing one by one,
        <br />
        and we are going to invite millions of people to take care of the planet.
      </p>
      <div className="subscribe">
        <input type="email" placeholder="Your Email" />
        <button type="button" className="btn-gral">Subscribe</button>
      </div>
    </div>
  );
}
