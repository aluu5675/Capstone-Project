import React, { Component } from 'react';
import './style.css';

export class ResourceCategoriesPage extends React.Component {
    render() {
        return (
            <body>
                <nav>
                    Filler Navigation
                </nav>
                <main className="categoriesContainer">     
                    <h1 className="categoryHeading">What Are You Looking For?</h1>
                    <input type="image" src="housing.png" className="categoryImage"/>                        
                    <input type="image" src="food_assistance.png" className="categoryImage"/>
                    <input type="image" src="transportation.png" className="categoryImage"/>
                </main>
            </body>
        )
    }
}