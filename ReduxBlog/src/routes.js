import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';


// Nested routes will be passed to this.props.children
// Note the differnce between the Route and IndexRoute
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostIndex} />
  </Route>
);
