import React from "react";
import Img from "gatsby-image";

import Skyrocket from "../img/svg/skyrocket.svg";
//import Title from "../img/svg/circle-marker.svg";

const HeroHome = ({ image, heading, addClass }) => (

  <section className={"hero background-image is-fullheight-with-navbar" + (addClass ? " " + addClass : "")}>
    {image ?
      <div className="is-image-wrapper has-position-absolute"><Img sizes={image}/></div>
      : null}
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6-desktop is-offset-1-desktop">
            <div className="content">
              <h1 className="title is-1 has-text-centered has-text-left-desktop is-uppercase">{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      className="hero-img"
      src={Skyrocket}
      alt="Skyrocket"
    />
  </section>

);

export default HeroHome;