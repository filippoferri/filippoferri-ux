import React from "react";
import Img from "gatsby-image";

const Hero = ({ image, heading, addClass, category }) => (

  <section className={"hero has-spaced" + (addClass ? " " + addClass : "")}>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-variable is-0-desktop">
          <div className="column is-6-desktop">
            <div className="title-wrapper">
              <div>
                <span className="is-uppercase is-primary">{category}</span>
                <h1 className="title">{heading}</h1>
              </div>
            </div>
          </div>
          <div className="column is-6-desktop is-offset-1-desktop">
            {image ?
              <div className="is-image-wrapper is-bordered"><Img sizes={image}/></div>
              : null}
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Hero;