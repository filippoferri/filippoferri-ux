import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

export default class BlogPage extends React.Component {

  findImage(image, title) {
    return <div className="is-image-wrapper has-position-absolute is-bordered"><Img sizes={image} alt={title} /></div>
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4-desktop is-offset-1-desktop">
            <div className="content">
              <h1 className="title is-3" style={{marginTop: '3rem'}}>Blog</h1>
              <p>I'm passionate about sharing knowledge. I continuously publish articles to open source my thinking.</p>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {posts
                .map(({ node: post }, index) => (
                  <div key={index} className="column is-6-tablet is-4-desktop">
                    <article>
                      <Link to={post.fields.slug} className={"blog-block-image is-paddingless"}>{this.findImage(post.frontmatter.heroImage.childImageSharp.sizes, post.frontmatter.title)}</Link>
                      <Link to={post.fields.slug} className="blog-block-title">{post.frontmatter.title}</Link>
                    </article>
                  </div>
                ))}
            </div>
            <div className="article-end"></div>
          </div>
        </section>
      </Layout>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "DD MMMM YYYY")
            heroImage {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
