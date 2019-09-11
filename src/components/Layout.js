import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Filippo Ferri: Product Designer" />
    <Navbar />
    <div>{children}</div>
    <section id="contact" className="section is-medium has-background-white-ter">
      <div className="container is-widescreen has-text-centered">
        <h4 className="title is-4 is-uppercase">Get in touch</h4>
        <p className="has-margin-bottom">If you’d like to pick my brain or discuss<br/> about Product, I’ll be happy to talk with you.</p>
        <a href="mailto:hello@filippoferri.it" className="button is-primary" target="_blank" rel="noopener noreferrer" >Send a message</a>
      </div>
    </section>
    <Footer/>
  </div>
)

export default TemplateWrapper
