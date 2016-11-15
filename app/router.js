import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import Home from './components/home';
import MovieList from './components/movie-list';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={MovieList} />
    </Route>
    <Route component={MainLayout}>
      <Route path="/home" component={Home} />
    </Route>
  </Router>
);
