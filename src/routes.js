import React from 'react';
import { Router, Route } from 'react-router-3';

import App from './App';
import Tracks from './pages/Tracks/Tracks';
import Request from './pages/Request/Request';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <Route path="/tracks" component={Tracks} />
            <Route path="/request" component={Request} />
        </Route>
    </Router>
);

export default Routes;