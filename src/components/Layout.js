import React from 'react';
import Helmet from 'react-helmet';
import { Link } from "gatsby";

import CookieConsent from 'react-cookie-consent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Filippo Ferri: Product Designer" />
    <Navbar />
    <div>{children}</div>
    <section id="contact" className="section is-medium has-background-white-ter">
      <div className="container has-text-centered">
        <h4 className="title is-4 is-uppercase">Get in touch</h4>
        <p className="has-margin-bottom">If you’d like to pick my brain or discuss<br/> about Product, I’ll be happy to talk with you.</p>
        <a href="mailto:hello@filippoferri.it" className="button is-primary" target="_blank" rel="noopener noreferrer" >Send a message</a>
      </div>
    </section>
    <Footer/>

    <CookieConsent
      location="bottom"
      acceptOnScroll={true}
      acceptOnScrollPercentage={25}
      cookieName="filippoferri.it"
      disableStyles={true}
      debug={true}

      buttonClasses="sh-cookie-bar-close"
      containerClasses="sh-cookie-bar-container"
      contentClasses=""

      buttonText="Close"
      extraCookieOptions={{domain: '//studenthotels.it'}}>
      This website uses cookies. Click  <Link to="/legals/privacy-policy">here</Link> for more information. If that’s okay with you, just keep browsing.
    </CookieConsent>
  </div>
)

export default TemplateWrapper
