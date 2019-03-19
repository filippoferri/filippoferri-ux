import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HeroHome from "../components/HeroHome";
import FeaturedCases from "../components/FeaturedCases";
//import LatestPosts from "../components/LatestPosts";

import Icon1 from "../img/svg/product-design.svg";
import Icon2 from "../img/svg/user-research.svg";
import Icon3 from "../img/svg/usability-testing.svg";
import Icon4 from "../img/svg/brand-identity.svg";
import planImg from "../img/svg/design-thinking.svg";

import skillsImg from "../img/jpg/skills.jpg";
import uxImg from "../img/jpg/user-experience-filippoferri.jpg";

export const IndexPageTemplate = ({ cases, articles }) => {

  return (
    <Layout>
      <HeroHome heading="Skyrocket User Satisfaction And Conversions"/>

      <section className="section is-medium has-background-primary">

        <div className="container">
          <div className="columns is-variable is-12">
            <div className="column has-text-centered">
              <div className="offer-block">
                <img src={Icon1} alt="Product Design"/>
                <h3 className="is-4">Product Design</h3>
                <p>I design and build products that solve problems and delight users.</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="offer-block">
                <img src={Icon2} alt="User Research"/>
                <h3 className="is-4">User Research</h3>
                <p>I can improve your digital services understanding your users.</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="offer-block">
                <img src={Icon3} alt="Usability Testing"/>
                <h3 className="is-4">Usability Testing</h3>
                <p>I can help discover if your services are being used effectively.</p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="offer-block">
                <img src={Icon4} alt="Brand Identity"/>
                <h3 className="is-4">Brand Identity</h3>
                <p>I simplify, elevate and build brands that transform and grow businesses.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-vcentered">
            <div className="column is-half-tablet is-5-desktop">
              <div className="content">
                <p className="subtitle is-marked">About me</p>
                <h2 className="title has-marked-subtitle">Make Products<br/> People Will Love</h2>
                <p>I'm a product person, continually looking for <span className="highlight">innovative solutions</span> that delight and surprise target users while always keeping their needs in mind.</p>
                <p>More, I'm a trusted partner of product managers and business stakeholders with the ability to influence product evolution as a user advocate.</p>
              </div>
            </div>
            <div className="column is-half-tablet is-6-desktop is-offset-1-desktop">
              <img src={skillsImg} alt="Skills"/>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop">
              <div className="content is-quote">
                Filippo is a great professional, problem solving expert and very inspired by the projects he is
                involved.
                <p className="cite">Talia Savchenko - <span className="is-small">OneAgent.co</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedCases cases={cases}/>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6-tablet">
              <div className="content">
                <p className="subtitle is-marked">My Approach</p>
                <h2 className="title has-marked-subtitle">Translate <br/>user needs<br/> into product <br/>experiences</h2>
              </div>
            </div>
          </div>
          <div className="columns is-multiline is-variable is-8-desktop">
            <div className="column is-6-tablet">
              <div className="content">
                <p>I brainstorm and communicate conceptual ideas and detailed design explanation both verbally and visually. I own end-to-end design projects from research and ideation through to implementation for existing and new product lines.</p>
                <img className={"gray-filter"} src={uxImg} alt="User Experience"/>
              </div>
            </div>
            <div className="column is-6-tablet">
              <div className="content">
                <p>I contribute to product strategy and roadmaps through customer research and design explorations, and streamline the design process as well as prioritize and guide new projects based on company goals and business objectives.</p>
                <p>I organize and run cross-team collaboration discussions and bring empathy, enthusiasm, and motivation to every interaction.</p>
                <div className="floating-stats">
                  <img src={planImg} alt="Improve Conversion"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <LatestPosts posts={articles}/>
      */}

    </Layout>
  );
};

const IndexPage = ({ data }) => {

  const { cases: edges } = data;
  const { posts: articles } = data;

  return (
    <IndexPageTemplate cases={edges} articles={articles}/>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query HomeQuery {
    cases: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "case-page" } },
      }
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
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } },
      }
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
            category
            heroImage {
              childImageSharp {
                sizes(maxWidth: 600) {
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