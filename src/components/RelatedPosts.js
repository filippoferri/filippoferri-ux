import React from "react";
import { Link } from "gatsby";

import Img from "gatsby-image";

const BackgroundImage = ({ image }) => (
  <div className="is-image-wrapper has-position-absolute">
    <Img sizes={image}/>
  </div>
);

const RelatedPosts = ({
    currentId,
    nextId,
    nextTitle,
    nextSlug,
    nextHeroImage,
    prevId,
    prevTitle,
    prevSlug,
    prevHeroImage
  }) => {

  return (
    <section className="section is-paddingless">

      {currentId !== prevId && currentId !== nextId  ? (
        <div className="related-post">
          <div className="related-post-left">
            <BackgroundImage image={prevHeroImage.childImageSharp.sizes}/>
            <Link to={prevSlug} className="related-post-link"></Link>
            <div className="related-post-title">
              <div className="related-post-label">Articolo precedente</div>
              {prevTitle}
              </div>
          </div>
          <div className="related-post-right">
            <BackgroundImage image={nextHeroImage.childImageSharp.sizes}/>
            <Link to={nextSlug} className="related-post-link"></Link>
            <div className="related-post-title">
              <div className="related-post-label">Articolo successivo</div>
              {nextTitle}</div>
          </div>
        </div>
      ) : null}

      {currentId === prevId ? (
        <div className="next-post">

          <BackgroundImage image={nextHeroImage.childImageSharp.sizes}/>

          <Link className="related-post-link" to={nextSlug}></Link>

          <div className="container">
            <div className="columns">
              <div className="column is-6-desktop is-offset-2-desktop is-centered">
                <div className="related-post-label">Next Article</div>
                <div className="related-post-title">{nextTitle}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {currentId === nextId ? (
        <div className="prev-post">

          <BackgroundImage image={prevHeroImage.childImageSharp.sizes}/>

          <Link className="related-post-link" to={prevSlug}></Link>

          <div className="container">
            <div className="columns">
              <div className="column is-6-desktop is-offset-2-desktop is-centered">
                <div className="related-post-label">Previous Article</div>
                <div className="related-post-title">{prevTitle}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

    </section>
  );
};

export default RelatedPosts;