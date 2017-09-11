import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="clear"></div>
        <div className="footer">
          <div className="wrapper_footer">
            <div className="follow">
              <h5>Suivez moi :</h5>
              <div className="follow_image">
                <a href="https://github.com/samodev" target="_blank"><img src="./../img/github.png"/></a>
                <a href="https://www.facebook.com/steph.dev.amoudi" target="_blank"><img src="./../img/facebook.png"/></a>
                <a href="http://www.viadeo.com/p/00226zvz7wm8ja47" target="_blank"><img src="./../img/Viadeo.png"/></a>
                <a href="https://www.linkedin.com/in/st%C3%A9phane-amoudi-510292125/" target="_blank"><img src="./../img/linkedin.png"/></a>
              </div>
            </div>
            <div className="cv">
              <h5>Mon CV : </h5>
              <a href="./../docs/cv_stephane_amoudi.pdf" target="_blank">
                <img src="./../img/CV.png"/>
              </a>
            </div>
            <div className="me_contacter">
              <h5>Mes coordonnées : </h5>
              <img src="./../img/phone.png" /><span>06 33 74 03 91</span><br/>
              <img src="./../img/email.png" /><span>samodev1725[at]gmail.com</span>
            </div>
          </div>

        </div>
      </div>
    );
  };
}
