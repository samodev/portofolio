import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter, Route, Switch, IndexRoute} from 'react-router-dom';

import Home from './../ui/Home';
import Portofolio from './../ui/Portofolio';
import Competences from './../ui/Competences';
import NotFound from './../ui/NotFound';

export const routes = (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/competences" component={Competences} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
);
