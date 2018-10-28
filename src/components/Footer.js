import React from "react";

import { Link } from "gatsby";

const Footer = () => (
  <footer>
    <div className="footer-section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <span className="title is-6">qualcosa su di me</span>
          </div>
          <div className="column is-four-fifths-tablet is-three-fifths-desktop">
            <p>Sono un <a href="/">consulente di User Experience Design</a> e <a href="/">Design Strategist</a>. Collaboro con agenzie in tutto il mondo per migliorare l'esperienza digitale dei loro utenti ponendoli al centro di ogni progetto. Il mio approccio non limita la User Experience a una questione visuale, ma ha come obiettivo l'ottimizzazione delle interfacce unendo estetica, usabilità e funzionalità.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <span className="title is-6">di cosa mi occupo</span>
          </div>
          <div className="column is-four-fifths">
            <div className="columns is-multiline">
              <div className="column is-half-tablet is-3-desktop">
                <p className="menu-label">
                  Strategie UX
                </p>
                <ul className="menu-list">
                  <li><a href="/">Ricerca e analisi</a></li>
                  <li><a href="/">Profilazione</a></li>
                  <li><a href="/">Revisione digitale</a></li>
                  <li><a href="/">Trasposizione digitale</a></li>
                </ul>
              </div>
              <div className="column is-half-tablet is-3-desktop">
                <p className="menu-label">
                  Ottimizzazione UX
                </p>
                <ul className="menu-list">
                  <li><a href="/">Prototyping</a></li>
                  <li><a href="/">Mind Mapping</a></li>
                  <li><a href="/">Usabilità</a></li>
                  <li><a href="/">Valutazione Experience</a></li>
                </ul>
              </div>
              <div className="column is-half-tablet is-3-desktop">
                <p className="menu-label">
                  UX Design
                </p>
                <ul className="menu-list">
                  <li><a href="/">Wireframing</a></li>
                  <li><a href="/">Design Guidelines</a></li>
                  <li><a href="/">Interaction Design</a></li>
                  <li><a href="/">Responsive Design</a></li>
                </ul>
              </div>
              <div className="column is-half-tablet is-3-desktop">
                <p className="menu-label">
                  Coaching
                </p>
                <ul className="menu-list">
                  <li><a href="/">Presentazioni</a></li>
                  <li><a href="/">Workshops</a></li>
                  <li><a href="/">Online Trainings</a></li>
                  <li><a href="/">Mentorship</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <span className="title is-6">contatti</span>
          </div>
          <div className="column is-four-fifths-tablet is-three-fifths-desktop">
            <div className="columns">
              <div className="column is-half">
                <p className="has-margin-bottom">
                  <span className="has-margin-bottom-small is-block">Manda un vocale:</span>
                  <span className="is-block has-text-big">+39 (0)328 627 2410</span>
                </p>
                <p>
                  <span className="has-margin-bottom-small is-block">Invia un'email:</span>
                  <a href="mailto: hello@filippoferri.it">hello@filippoferri.it</a>
                </p>
              </div>
              <div className="column is-half">
                <p><span className="has-margin-bottom-small is-block has-text-weight-bold">Vuoi un incontro 1:1?</span></p>
                <p className="has-margin-bottom-small is-block">Fissa un incontro vis-à-vis. Sono a disposizione per uno
                  scambio di idee, consulenza o suggerimenti.</p>
                <p>
                  <a href="/" target="_blank">Prenota qui</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ff-copy has-background-black">
      <div className="container has-text-centered">
        <span>&copy;2018 Filippo Ferri</span>
        <span>P. IVA 02341330419</span>
        <Link to={"/"}>Note legali</Link>
      </div>
    </div>
  </footer>
);

export default Footer;