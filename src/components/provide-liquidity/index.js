import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import imgLiquidity from '../../assets/img/liquidity.jpg';

export default function ProvideLiquidity() {
  return (
    <div className="liquidity-content">
      <div className="left-side">
        <span className="line" />
        <h2>
          Earn passive income by providing liquidity
        </h2>
        <p>
          Buebio makes it easy to make your capital work for you, at the same
          time you are making a better world.
        </p>
        <Link to="/" className="btn-gral no-fill">Provide liquidity</Link>
      </div>
      <div className="right-side">
        <img alt="" src={imgLiquidity} />
      </div>
    </div>
  );
}
