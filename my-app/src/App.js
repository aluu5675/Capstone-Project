import React, { Component } from 'react';
import { Navbar } from './Navbar.js'
import { ResourcesPage, ResourceList } from './ResourcesPage.js'
import { ResourceCategoriesPage } from './ResourceCategoriesPage.js'
import './style.css';

export default class App extends Component {
  render() { 
    return (
      <ResourceCategoriesPage />
    );
  }
}

