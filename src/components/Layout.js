import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Filippo Ferri : Consulente di User Experience Design e Design Strategist" />
    <Navbar />
    <div>{children}</div>
    <Footer></Footer>
  </div>
)

export default TemplateWrapper
