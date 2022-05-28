import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function TradeComponent() {
  return (
    <div className="trade-content">
      <span className="line" />
      <h4>Trade for a sustainable world</h4>
      <h2>
        The place where taking risks for a better world,
        meets demand
      </h2>
      <p>
        If we create markets for products that care, we
        are caring, if we market products that harm, we
        are part of the problem. The time has come to
        take care. It&#39;s time for you to make the rules.
      </p>
      <Link to="/" className="btn-gral">Trade now</Link>
    </div>
  );
}
