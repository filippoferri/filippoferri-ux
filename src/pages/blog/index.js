import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h3 className="">Blog</h3>
            </div>
            <div className="columns">
              <div className="column is-12-tablet is-6-desktop is-offset-3-desktop">
                {posts
                  .map(({ node: post }) => (
                    <div
                      className="content"
                      key={post.id}
                    >
                      <p>
                        <Link className="has-text-primary" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      <p>
                        {post.frontmatter.description}
                        <br/>
                        <br/>
                        <Link className="button is-small" to={post.fields.slug}>
                          Continua a leggere
                        </Link>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
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
            date(formatString: "DD MMMM, YYYY", locale: "it")
          }
        }
      }
    }
  }
`;
