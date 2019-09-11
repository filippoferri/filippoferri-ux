import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  }

  render() {
    const isActive = this.state.active;

    return (
      <nav className="navbar has-background-white is-transparent">
        <div className="container is-widescreen">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              FF
            </Link>

            <div role="button" className={"navbar-burger burger" + (!isActive ? '' : ' is-active')} aria-label="menu" aria-expanded="false" onClick={this.toggleMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className={"navbar-menu" + (!isActive ? '' : ' is-active')}>
            <div className="navbar-start">
            </div>
            <div className="navbar-end">
              {/*
          <Link className="navbar-item" to="/digital-strategy" title="UX Strategy">
            UX Strategy
          </Link>
          */}
              <Link className="navbar-item" to="/case-studies" title="Case Studies">
                Case Studies
              </Link>
              <Link className="navbar-item" to="/blog" title="Blog">
                Blog
              </Link>
              <Link className="navbar-item navbar-last-item" to="/contact" title="Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
