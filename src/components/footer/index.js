import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import iconFacebook from '../../assets/img/facebook.svg';
import iconInstagram from '../../assets/img/instagram.svg';
import iconTwitter from '../../assets/img/twitter.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <ul>
          <b>Company</b>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/">Contact us</Link></li>
        </ul>
        <ul>
          <b>Explore</b>
          <li><Link to="/">Trade Us</Link></li>
          <li><Link to="/">Pools</Link></li>
        </ul>
        <ul>
          <b>Impact</b>
          <li><Link to="/">My impact</Link></li>
          <li><Link to="/">Buebio&apos;s impact</Link></li>
        </ul>
      </div>
      <footer>
        <span>Copyright © 2021 Buebio, Inc.</span>
        <div className="social">
          <Link to="/"><img alt="" src={iconFacebook} /></Link>
          <Link to="/"><img alt="" src={iconInstagram} /></Link>
          <Link to="/"><img alt="" src={iconTwitter} /></Link>
        </div>
      </footer>
    </div>
  );
}
