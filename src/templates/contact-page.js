import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Frog from "../img/jpg/lets-jump.jpg";

export const ContactPageTemplate = ({ title }) => {

  return (
    <Layout>
      <section className="hero background-image is-fullheight-with-navbar">

        <div className="hero-body">
          <div className="container is-widescreen">
            <div className="columns">
              <div className="column is-6-desktop">
                <div className="content">
                  <h1 className="title is-1">{title}</h1>
                  <p>
                    <a href="https://calendly.com/filippoferri/30min" title="Let's talk" target="_blank"
                        rel="noopener noreferrer">30-Minutes Meeting</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="hero-img reduced"
          src={Frog}
          alt="Let's jump, but no kisses please!"
        />
      </section>
    </Layout>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const aboutPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
