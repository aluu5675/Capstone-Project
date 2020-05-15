import React, { Component } from 'react';

import { Navbar } from './Navbar.js';
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import './style.css';
import HomePage from './Home.js';
import { ResourceCategoriesPage } from './ResourceCategoriesPage.js';
import { ResourcesPage } from './ResourcesPage.js';

export default class App extends Component {
  render() { 
    return (
    <div className="App">
        <Router>
            <Navbar />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/resources' component={ResourceCategoriesPage} />
            <Route exact path='/resources/:resourceType' component={ResourcesPage} />
        </Router>
    </div>
    );
  }
}

