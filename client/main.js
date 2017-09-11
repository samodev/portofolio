import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {routes} from './../imports/routes/Routes';

Meteor.startup( () => {

  Tracker.autorun( () => {
    ReactDOM.render(routes, document.getElementById('App'));
  });
});
