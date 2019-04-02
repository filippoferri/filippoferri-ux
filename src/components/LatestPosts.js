import React from "react";
import { Link } from "gatsby";

import Img from "gatsby-image";

const Article = ({ article }) => {

  const title = article.node.frontmatter.title;
  const slug = article.node.fields.slug;
  const category = article.node.frontmatter.category;
  const img = article.node.frontmatter.heroImage.childImageSharp.sizes;

  return (
    <div className="column is-6-tablet">
      <div className="featured-post-image">
        <Link className="is-image-wrapper has-position-absolute" to={slug}>
          <Img sizes={img} alt={title}/>
        </Link>
        <span className="featured-post-category"><span>{category}</span></span>
      </div>
      <Link to={slug} className="featured-post-title">{title}</Link>
    </div>
  );

};

const LatestPosts = ({ posts }) => {

  const { edges: articles } = posts;


  return (
    <section className="section has-margin-bottom-large">
      <div className="container">
        <div className="columns is-multiline is-variable is-8-desktop is-baligned">
          <div className="column is-6-tablet">
            <div className="content">
              <h3 className="title has-marked-subtitle">Tips<br/>about<br/>product</h3>
            </div>
          </div>
          <div className="column is-6-tablet has-text-right">
            <Link className="button is-primary has-margin-bottom" to={"/blog"}>All articles</Link>
          </div>
        </div>
        <div className="columns is-multiline is-variable is-8-desktop">
          {articles
            .map((article,index) => (
              <Article key={index} article={article}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;