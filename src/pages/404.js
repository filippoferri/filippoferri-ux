import React from "react";
import Layout from "../components/Layout";

import error from "../img/svg/404.svg";

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="columns is-multiline">
        <div className="container content">
          <div className="column has-text-centered">
            <img src={error} alt="404"/>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
