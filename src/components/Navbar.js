import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar has-background-black is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Filippo Ferri
        </Link>
      </div>
      <div className="navbar-menu">
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          Strategie
        </Link>
        <Link className="navbar-item" to="/products">
          Ottimizzazione UX
        </Link>
        <Link className="navbar-item" to="/products">
          Progetti
        </Link>
        <Link className="navbar-item" to="/products">
          Blog
        </Link>
      </div>
      </div>
    </div>
  </nav>
)

export default Navbar
