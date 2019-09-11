import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export default class LegalsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: legals } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container is-widescreen">
            <div className="content has-text-centered">
              <h3 className="">Legal notice</h3>
            </div>
            <div className="columns">
              <div className="column is-12-tablet is-6-desktop is-offset-3-desktop">
                {legals
                  .map(({ node: note }) => (
                    <div
                      className="content"
                      key={note.id}
                    >
                      <p>
                        <Link to={note.fields.slug}>
                          {note.frontmatter.title}
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

LegalsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query LegalsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { category: { eq: "legals" } }}
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
          }
        }
      }
    }
  }
`;
