import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="intro">
            <img src="./../img/laptop.png" />
            <h1>Vous cherchez un développeur web ?</h1>
            <p>Ça tombe bien, je suis un développeur passionné par le web,<br />
            toujours à la recherche de nouvelles opportunités.<br/> En ce moment,
          je suis à la recherche d'un contrat en alternance.<br/>
        Si mon profil vous intéresse, n'hésitez pas à me contacter</p>
          </div>
          <div className="about">
            <h5>A propos de moi :</h5>
            <p>Je m'appelle Stéphane Amoudi, j'ai commencé le développement web pour développer un petit site perso
              et c'est rapidement devenu une vraie vocation. J'ai ensuite développé des sites pour des groupes de musique,
              et j'y ai pris goût de plus en plus.
              J'aime expérimenter, découvrir <br />et apprendre au fur et à mesure de mes projets pros et perso.
             Mon projet actuel<br/> sera une platforme de partage autour des musiques électroniques (gros chantier).</p>
             <img src="./../img/photo.jpg" />
          </div>
          <div className="interest">
            <div className="language">
              <h5>Langues parlées :</h5>
              <div className="french">
                <img src="./../img/fr.jpg" />
                <p>Français</p>
              </div>
              <div className="english">
                <img src="./../img/gb.jpg" />
                <p>Anglais</p>
              </div>
              <div className="arabic">
                <img src="./../img/liban.png" />
                <p>Arabe</p>
              </div>
            </div>
            <div className="hobbies">
              <h5>Centres d'intêrets :</h5>
              <p>- Musique électronique</p>
              <p>- Films / Séries / Livres</p>
              <p>- Innovations téchnologiques</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
}
