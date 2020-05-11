import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar } from './Navbar.js';
import './style.css';

export class ResourceCategoriesPage extends React.Component {
    render() {
        return (
            <body>
                <main className="categoriesContainer">     
                    <h1 className="categoryHeading">What Are You Looking For?</h1>
                    <Link to='/resources/housing'>
                        <input type="image" src="housing.png" className="categoryImage"/>       
                    </Link>
                    <Link to='/resources/food'>
                        <input type="image" src="food_assistance.png" className="categoryImage"/>
                    </Link>
                    <Link to='/resources/transportation'>
                        <input type="image" src="transportation.png" className="categoryImage"/>
                    </Link>
                </main>
            </body>
        )
    }
}