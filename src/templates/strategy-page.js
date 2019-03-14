import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import planImg from "../img/jpg/agile-planning-filippoferri.jpg";
import reorgImg from "../img/jpg/reorganization-filippoferri.jpg";
import mapImg from "../img/jpg/roadmap.jpg";

import agencySvg from "../img/svg/agency.svg";
import companySvg from "../img/svg/company.svg";
import teamSvg from "../img/svg/team.svg";

export const StrategyPageTemplate = ({ title, description }) => {

  return (
    <Layout>
      <section className="section" style={{ marginBottom: "4rem" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop is-offset-1-desktop">
              <div className="content">
                <h1 className="title is-3" style={{ marginTop: "3rem" }}>{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-black">

        <div className="is-image-wrapper has-position-absolute"><img src={planImg} alt="Planning"/></div>

        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop is-offset-6-desktop">
              <div className="floating-block has-background-primary has-shadow">
                <h2 className="title">Research</h2>
                <p>In this phase, I prepare surveys, hold interviews, gather data and examine existing digital assets. My goal is to understand the users, to talk stakeholders, and to analyze digital services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-two-third-tablet is-5-desktop">
              <div className="content">
                <p className="subtitle is-marked">Design Thinking</p>
                <h3 className="title has-marked-subtitle">Ideation</h3>
                <p>I strategize, collaborate and contribute to all aspects of the product design to enhance user experience.</p>
                <p>I participate in every phase of the design process from paper prototyping and initial concepts, to prototypes, wireframes, and pixel perfect comps.</p>
              </div>
            </div>
            <div className="column is-one-third-tablet is-6-desktop is-offset-1">
              <img src={mapImg} alt="Roadmap"/>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-black">

        <div className="is-image-wrapper has-position-absolute"><img src={reorgImg} alt="Reorganization"/></div>

        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop">
              <div className="floating-block has-background-white has-shadow">
                <h3 className="title">Implementation</h3>
                <p>I create value at the intersection of business goals and customers goals by driving discussions, uncovering requirements and organizing and directing presentations and supporting collateral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop">
              <div className="has-text-centered content" style={{ marginBottom: "4rem" }}>
                <h3 className="title">HOW I CAN HELP</h3>
              </div>
            </div>
          </div>
          <div className="columns is-multiline is-variable is-8-desktop">
            <div className="column is-4-desktop">
              <img src={agencySvg} alt="Agency" className="has-margin-bottom"/>
              <h3 className="title is-4">Agencies</h3>
              <p>Are you looking for integrating a user-centered strategy into your digital services? <a href="#contact">Let's talk!</a></p>
            </div>
            <div className="column is-4-desktop">
              <img src={companySvg} alt="Agency" className="has-margin-bottom"/>
              <h3 className="title is-4">Companies</h3>
              <p>Do you need to ensure your company brand is consistent and demonstrates value to your clients? <a href="#contact">Get in touch!</a></p>
            </div>
            <div className="column is-4-desktop">
              <img src={teamSvg} alt="Agency" className="has-margin-bottom"/>
              <h3 className="title is-4">Teams</h3>
              <p>Do you require a User Experience consultancy? I often collaborate with large and small teams. <a href="#contact">Contact me!</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

StrategyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const StrategyPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <StrategyPageTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
  );
};

StrategyPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default StrategyPage;

export const strategyPageQuery = graphql`
  query StrategyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
