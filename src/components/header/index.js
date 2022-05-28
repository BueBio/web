import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu.svg';
import arrow from '../../assets/img/arrow.svg';

export default function Header() {
  const [menuMobile, setMenuMobile] = useState('');
  return (
    <div className={`content-header ${menuMobile}`}>
      <img alt="" src={logo} className="logo" />
      <button type="button" className="btn-menu" onClick={() => setMenuMobile('active-menu')}>
        <img alt="" src={menu} />
      </button>
      <button type="button" className="background-menu-mobile" onClick={() => setMenuMobile('')}> </button>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">How</Link></li>
        <li><Link to="/">Explore</Link></li>
        <li><Link to="/">Impact</Link></li>
      </ul>
      <Link to="/" className="btn-gral">
        Get Started
        <img alt="" src={arrow} />
      </Link>
    </div>
  );
}
