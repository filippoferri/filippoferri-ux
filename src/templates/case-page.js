import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

export const CasePageTemplate = ({
    content,
    contentComponent,
    overview,
    tags,
    title,
    activities,
    stakeholders,
    goals,
    heroImage,
    helmet
  }) => {
  const PostContent = contentComponent || Content;

  return (
    <main>
      {helmet || ""}
      <Hero image={heroImage.childImageSharp.sizes} heading={title} addClass="is-post" category="case study"/>

      <section className="section has-border-bottom">
        <div className="container">
          <div className="columns">
            <div className="column is-10-tablet is-offset-1-tablet is-6-desktop is-offset-3-desktop">
              <div className="article-start"></div>
              <h2 className="title">Overview</h2>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-primary">
        <div className="container">
          <div className="columns">
            <div className="column is-4-desktop">
              <div className="article-box">
                <p className="menu-label">Goals</p>
                {goals && goals.length ? (
                  <ul className="menu-list">
                    {goals.map((item, index) => (
                      <li key={index}>{item.goal}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="column is-4-desktop">
              <div className="article-box">
                <p className="menu-label">Stakeholders</p>
                {stakeholders && stakeholders.length ? (
                  <ul className="menu-list">
                    {stakeholders.map((stakeholder, index) => (
                      <li key={index}>{stakeholder}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="column is-4-desktop">
              <div className="article-box">
                <p className="menu-label">Activity</p>
                {activities && activities.length ? (
                  <ul className="menu-list">
                    {activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">

        <div className="container is-widescreen content post">
          <div className="columns">
            <div className="column is-10-tablet is-offset-1-tablet is-6-desktop is-offset-3-desktop">
              <PostContent content={content}/>
              <div className="article-end"></div>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
};

CasePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  overview: PropTypes.string,
  title: PropTypes.string,
  heroImage: PropTypes.shape(),
  goals: PropTypes.array,
  activities: PropTypes.array,
  stakeholders: PropTypes.array,
  //helmet: PropTypes.instanceOf(Helmet)
};

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CasePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        overview={post.frontmatter.overview}
        heroImage={post.frontmatter.heroImage}
        helmet={<Helmet title={`${post.frontmatter.title}`}/>}
        activities={post.frontmatter.activities}
        stakeholders={post.frontmatter.stakeholders}
        goals={post.frontmatter.goals}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CaseStudy;

export const pageQuery = graphql`
  query CasePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        overview
        stakeholders
        activities
        goals {
          goal
        }
        heroImage {
          childImageSharp {
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
