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
                <nav>
                    <div className="suggestionBanner">
                        <table className="categories-table">
                            <tr>
                                <td>
                                    <p className="new-user-title">New to Seattle Children's?</p>
                                    <span className="new-user-desc">Don't know what you're looking for? Get started with a list of the most frequently accessed resources both in and outside the hospital</span>
                                </td>
                                <td>
                                    <Link to='/resources/popular'>
                                        <input type="image" src="img/resources_button.PNG" className="top-resources-button" />
                                    </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </nav>
                <div className="section-one">     
                    <h1 className="no-line">What Are You Looking For?</h1>
                    <table className="categories-table">
                        <tr>
                            <td>
                                <Link to='/resources/housing'>
                                    <input type="image" src="img/housing_icon.png" className="category-image"/>       
                                </Link>
                            </td>
                            <td>
                                <Link to='/resources/food'>
                                    <input type="image" src="img/food_assistance_icon.png" className="category-image"/>
                                </Link>
                            </td>
                            <td>
                                <Link to='/resources/transportation'>
                                    <input type="image" src="img/transportation_icon.png" className="category-image"/>
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Link to='/resources/technology'>
                                    <input type="image" src="img/technology_icon.png" className="category-image"/>
                                </Link>
                            </td>
                            <td>
                                <Link to='/resources/hygiene'>
                                    <input type="image" src="img/hygiene_icon.png" className="category-image"/>
                                </Link>
                            </td>
                            <td>
                                <Link to='/resources/mental_health'>
                                    <input type="image" src="img/mental_health_icon.png" className="category-image"/>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="section-two">
                    <div className="faq-container">
                        <h1 className="no-line">FAQ</h1>
                        <button className="accordion">I can't find what I need. What do I do?</button>
                        <div className="panel">
                        <p className="faq-answer">
                            Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. 
                        </p>
                        </div>

                        <button className="accordion">Can I get the same help in person?</button>
                        <div className="panel">
                        <p className="faq-answer">
                            It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life...He had such
                             a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to 
                             be unnatural.
                        </p>
                        </div>

                        <button className="accordion">Are these services limited to Seattle Children's patient families?</button>
                        <div className="panel">
                        <p className="faq-answer">
                            He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did.
                        </p>
                        </div>

                        <button className="accordion">How do I know I'm eligible?</button>
                        <div className="panel">
                        <p className="faq-answer">
                            Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="section-three">
                    <div className="help-form">
                        <h1 className="help-title">Help Request Form</h1>
                        <h4 className="help-description">Leave your questions or concerns and a Happy Hospital representative will get back to you within 2 days.</h4>
                        <div className="general">
                            <p className="help-form-questions">Name</p>
                            <input type="text"></input>
                            <p className="help-form-questions">Email</p>
                            <input type="text"></input>
                            <p className="help-form-questions">Language</p>
                            <select id="languages">
                                <option value="English">English</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Somali">Somali</option>
                                <option value="Russian">Russian</option>
                                <option value="French">French</option>
                            </select>
                        </div>
                        <div className="general">
                            <p className="help-form-questions">Questions</p>
                            <textarea cols="60" rows="10"></textarea>
                            <br></br>
                            <div className="help-buttons">
                                <button className="help">Cancel</button>
                                <button className="help">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}