import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import CtaButtons from './CtaButtons';
import HowItWorks from './HowItWorks';
import ContributorBenefits from './ContributorBenefits';

function LandingPage() {
  return (
    <>
      <NavBar />
      <Header />
      <CtaButtons/>
      <HowItWorks />
      <ContributorBenefits />
    </>
  );
}

export default LandingPage