import React from 'react';
import './styles.scss';

export default function Stats() {
  return (
    <div className="content-stats">
      <div className="card">
        <h2>1</h2>
        <p>Markets</p>
      </div>
      <div className="card">
        <h2>$3M</h2>
        <p>Total volume</p>
      </div>
      <div className="card">
        <h2>$1M</h2>
        <p>Total liquidity</p>
      </div>
      <div className="card">
        <h2>2k</h2>
        <p>Trades executed</p>
      </div>
    </div>
  );
}
