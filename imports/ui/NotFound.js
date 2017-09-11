import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="notfound">
            <img src="./../img/404.png"/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
}
