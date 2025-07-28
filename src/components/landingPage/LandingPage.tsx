import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import CtaButtons from './CtaButtons';
import HowItWorks from './HowItWorks';
import ContributorBenefits from './ContributorBenefits';
import MaintainerBenefits from './MaintainerBenefits';
import Pricing from './Pricing';
import Contact from './Contact'

function LandingPage() {
  return (
    <>
     <NavBar />
      <section id="home">
        <Header />
        <CtaButtons />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="contributors">
        <ContributorBenefits />
      </section>

      <section id="maintainers">
        <MaintainerBenefits />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default LandingPage
