import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="hero is-medium has-background-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1>Ottimizza la User Experience dei tuoi servizi</h1>
              <p className="subtitle">Crea un'esperienza unica per gli utenti e un design performante per far crescere il tuo business</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-third-tablet is-2-desktop is-offset-3-desktop">
                <figure className="image is-128x128">
                  <img className="is-rounded" src="https://source.unsplash.com/d-MfHM-jHwc/300x300" alt="Filippo Ferri"/>
                </figure>
              </div>
              <div className="column is-two-third-tablet is-4-desktop">
                <div className="content">
                  <p>Mi chiamo Filippo Ferri. Sono <a href="/">Design
                    Strategist</a>, <a href="/">Product Designer</a> e <a href="/">consulente di User Experience Design</a>. Il mio ruolo è quello di progettare servizi che le persone amano.</p><p>Lavoro a stretto contatto con le aziende durante il processo di sviluppo dei servizi, aiutandole a capire i propri utenti attraverso ricerche, strategie, prototipi e grafiche, al raggiungimento di una completa User Experience.</p>
                </div>
              </div>
              <div className="column is-12-tablet is-6-desktop is-offset-3-desktop">
                <div className="notification is-warning has-text-centered">
                  <b>Vuoi saperne di più?</b> Scopri come posso migliorare i tuoi servizi.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 has-text-centered">
                <div className="content">
                  <h3>Cerchi consulenza nella ricerca degli utenti o nella tua carriera di UX?</h3>
                </div>
              </div>
              <div className="column is-6-tablet is-6-desktop is-offset-3-desktop">
                <div className="content">
                  <p>Posso aiutarvi a delineare la strategia di progettazione dei vostri servizi. Il principale obiettivo è di riorganizzare la struttura, l'architettura e le infrastrutture dei servizi migliorando la qualità dell'esperienza e dell'interazione tra voi e l'utente.</p>
                  <p>Progettando servizi user-centric ha il vantaggio di offrire un'esperienza semplice, funzionale e piacevole al consumatore, rendendo voi fornitori dei servizi più competitivi sul mercato.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h3 className="">Case Study</h3>
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
                          Keep Reading →
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2
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
            description
            templateKey
            date(formatString: "DD MMMM, YYYY", locale: "it")
          }
        }
      }
    }
  }
`;
