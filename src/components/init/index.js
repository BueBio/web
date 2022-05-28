import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import image from '../../assets/img/init.jpg';

export default function Init() {
  return (
    <div className="content-init">
      <div className="welcome-box">
        <div className="left-box">
          <span>Join Us</span>
          <h2>Bringing liquidity to empower a sustainable world</h2>
          <p>
            Dear doer; your power can change the rules.
            <br />
            We exist to give you the possibility to take care of the
            world by creating liquidity markets for your products.
            Take care of people, protect the soil, take care of water,
            preserve life, avoid agrochemicals, give work and
            restore ecosystems.
          </p>
          <div className="buttons-box">
            <Link to="/" className="btn-gral">Get Started</Link>
            <Link to="/" className="btn-gral no-fill">How it works</Link>
          </div>
        </div>
        <div className="right-box"><img alt="" src={image} /></div>
      </div>
      <div className="cards-content">
        <div>
          <h3>Secure Demand</h3>
          <p>
            Emissions reduction is not enough.
            We need to remove carbon from
            the atmosphere.
          </p>
        </div>
        <div>
          <h3>Attractive incentives</h3>
          <p>
            Forests are the most proven, scalable
            and cost-effective means of drawing
            down atmospheric carbon.
          </p>
        </div>
        <div>
          <h3>Access to financing</h3>
          <p>
            Forests are underutilized due to
            an absence of reliable data.
            Buebio’s technology changes that.
          </p>
        </div>
      </div>
    </div>
  );
}
