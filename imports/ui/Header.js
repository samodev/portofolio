import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src="./../../img/logo.png"/>
          <div className="menu">
            <div>
              <NavLink to="/"><img src="./../img/home.png"/>Accueil</NavLink>
            </div>
            <div className="portofolio">
              <NavLink to="/portofolio"><img src="./../img/portofolio.png"/>Portofolio</NavLink>
            </div>
            <div className="competences">
              <NavLink to="/competences"><img src="./../img/competences.png"/>Compétences</NavLink>
            </div>

          </div>

      </div>
    );
  };
}
