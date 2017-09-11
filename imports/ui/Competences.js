import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Competences extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <h3>Langages utilisés :</h3>
          <div className="langages">
            <div>
              <p><strong>HTML</strong></p>
              <img src="./../img/html.png"/>
            </div>
            <div>
              <p><strong>CSS</strong></p>
              <img src="./../img/css.png"/>
            </div>
            <div>
              <p><strong>PHP</strong></p>
              <img src="./../img/php.png"/>
            </div>
            <div>
              <p><strong>Javascript</strong></p>
              <img src="./../img/js.png"/>
            </div>
            <div>
              <p><strong>MySQL</strong></p>
              <img src="./../img/sql.png"/>
            </div>
            <div>
              <p><strong>MongoDB</strong></p>
              <img src="./../img/mongodb.png"/>
            </div>
          </div>
          <h3>Frameworks et CMS utilisés : </h3>
          <div className="frameworks">
            <div>
              <p><strong>Meteor JS</strong></p>
              <img src="./../img/meteor.png"/>
            </div>
            <div>
              <p><strong>React JS</strong></p>
              <img src="./../img/react.png"/>
            </div>
            <div>
              <p><strong>Node JS</strong></p>
              <img src="./../img/node.png"/>
            </div>
            <div>
              <p><strong>Express JS</strong></p>
              <img src="./../img/express.png"/>
            </div>
            <div>
              <p><strong>Joomla</strong></p>
              <img src="./../img/joomla.png"/>
            </div>
          </div>
          <h3>Autre outils utilisés :</h3>
          <div className="other">
            <div>
              <p><strong>GIT</strong></p>
              <img src="./../img/git.png"/>
            </div>
            <div>
              <p><strong>Atom</strong></p>
              <img src="./../img/atom.png"/>
            </div>
            <div>
              <p><strong>Photoshop</strong></p>
              <img src="./../img/photoshop.png"/>
            </div>
            <div>
              <p><strong>Linux</strong></p>
              <img src="./../img/linux.png"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
}
