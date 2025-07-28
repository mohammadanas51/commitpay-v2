import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import CtaButtons from './CtaButtons';
import HowItWorks from './HowItWorks';
import ContributorBenefits from './ContributorBenefits';
import MaintainerBenefits from './MaintainerBenefits';
import Pricing from './Pricing';

function LandingPage() {
  return (
    <>
      <NavBar />
      <Header />
      <CtaButtons/>
      <HowItWorks />
      <ContributorBenefits />
      <MaintainerBenefits/>
      <Pricing/>
    </>
  );
}

export default LandingPage