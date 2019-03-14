import React from "react";
import { Link } from "gatsby";

import Img from "gatsby-image";

const CaseStudy = ({ study }) => {

  const title = study.node.frontmatter.title;
  const slug = study.node.fields.slug;
  const img = study.node.frontmatter.heroImage.childImageSharp.sizes;

  return (
    <div className="square-tile has-background-primary">
      <div className="is-image-wrapper has-position-absolute">
        <Img className={"gray-filter"} sizes={img} alt={title}/>
      </div>

      <div className="square-tile-content">
        <div>case study</div>
        {title}
      </div>

      <Link to={slug}/>

    </div>
  );

};

const FeaturedCases = ({ cases }) => {

  const { edges: studies } = cases;

  return (
    <section className="section is-paddingless">
      <div className="square-tile-wrapper">
        {studies
          .map((study, index) => (
            <CaseStudy key={index} study={study}/>
          ))}
      </div>
    </section>
  );
};

export default FeaturedCases;