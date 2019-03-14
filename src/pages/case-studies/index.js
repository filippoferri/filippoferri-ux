import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

export default class CasesPage extends React.Component {

  findImage(image, title) {
    return <div className="is-image-wrapper has-position-absolute is-bordered"><Img sizes={image} alt={title} /></div>
  }

  render() {
    const { data } = this.props;
    const { edges: cases } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4-desktop is-offset-1-desktop">
                <div className="content">
                  <h1 className="title is-3" style={{marginTop: '3rem'}}>Case Studies</h1>
                  <p>I make products more successful. It means products I work with are better prepared to compete in the future.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
                {cases
                  .map(({ node: study }, index) => (
                    <div key={index} className="column is-6-tablet is-4-desktop">
                      <article>
                        <Link to={study.fields.slug} className="case-block-image is-paddingless">{this.findImage(study.frontmatter.heroImage.childImageSharp.sizes, study.frontmatter.title)}
                        <span>{study.frontmatter.title}</span>
                        </Link>
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

CasesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query CasesPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "case-page" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY", locale: "it")
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
