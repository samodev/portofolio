import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Portofolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <h3>Mes réalisations : </h3>
          <div className="realisations">
            <div className="s2t">
              <a href="https://www.son2teuf.org" target="_blank"><img src="./../img/s2t.jpg"/></a>
              <div className="s2t_detail">
                <ul>
                  <li>Fondateur du site</li>
                  <li>Maîtrise du CMS Joomla</li>
                  <li>Modifications de code JS/PHP/CSS/HTML</li>
                  <li>Production d'artistes sur support vynil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  };
}
