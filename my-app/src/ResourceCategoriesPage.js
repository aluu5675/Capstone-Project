import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar } from './Navbar.js';
import './style.css';

export class ResourceCategoriesPage extends React.Component {
    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
        }
    }
    
    render() {
        return (
            <body>
                <main className="categoriesContainer">     
                    <h1 className="no-line">What Are You Looking For?</h1>
                    <Link to='/resources/housing'>
                        <input type="image" src="img/housing_icon.png" className="categoryImage"/>       
                    </Link>
                    <Link to='/resources/food'>
                        <input type="image" src="img/food_assistance_icon.png" className="categoryImage"/>
                    </Link>
                    <Link to='/resources/transportation'>
                        <input type="image" src="img/transportation_icon.png" className="categoryImage"/>
                    </Link>
                </main>
                <div className="section-two">
                    <div className="faq-container">
                        <h1 className="no-line">FAQ</h1>
                        <button className="accordion">I can't find what I need. What do I do?</button>
                        <div className="panel">
                        <p className="faq-answer">Lorem ipsum...</p>
                        </div>

                        <button className="accordion">Can I get the same help in person?</button>
                        <div className="panel">
                        <p className="faq-answer">Lorem ipsum...</p>
                        </div>

                        <button className="accordion">Are these services limited to Seattle Children's patient families?</button>
                        <div className="panel">
                        <p className="faq-answer">Lorem ipsum...</p>
                        </div>

                        <button className="accordion">How do I know I'm eligible?</button>
                        <div className="panel">
                        <p className="faq-answer">Lorem ipsum...</p>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}