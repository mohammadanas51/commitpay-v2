import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import CtaButtons from './CtaButtons';
import HowItWorks from './HowItWorks';

function LandingPage() {
  return (
    <>
      <NavBar />
      <Header />
      <CtaButtons/>
      <HowItWorks />
    </>
  );
}

export default LandingPage