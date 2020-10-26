import React, { useState, useEffect } from 'react';

import { Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Favourites from './Favourites';

export default function Container(props) {



    return (

        <div>
            <Route path='/home' exact render={({ match }) => <Home match={match} />} />
            <Route path='/search' exact render={({ match }) => <Search match={match} />} />
            <Route path='/favourites' exact component={Favourites} />
            <Route path='/favourite/:id' exact render={({ match }) => <Favourites match={match} />} />
        </div>

    )
}