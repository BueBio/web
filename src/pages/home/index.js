import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Init from '../../components/init';
import Stats from '../../components/stats';
import TradeComponent from '../../components/trade';
import ProvideLiquidity from '../../components/provide-liquidity';
import JoinUs from '../../components/join-us';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Init />
      <Stats />
      <TradeComponent />
      <ProvideLiquidity />
      <JoinUs />
      <Footer />
    </>
  );
}
