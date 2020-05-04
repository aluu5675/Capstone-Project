import React from 'react';
import { SearchBar } from './SearchBar.js';

let Component = React.Component;

export class Navbar extends Component {
    
    render() {
        return (
            <div>
                <header className="site-header">
                    <div className="site-header-top">
                        <div className="row">
                            <div className="flex-left">
                                <div className="logo-full">
                                    <img src='img/happylogo.png' alt='homepage logo' className='homeLogo'></img>
                                </div>
                            </div>
                            <div className="flex-right">
                                <div className="globalSearch-container">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-wrapper">
                        <div className="sticky-nav-container">
                            <div className="flex-left">
                                <nav className="primary-nav main-nav-off-canvas off-canvas">
                                    <div className="menu clearfix">
                                        <ul className="menu-primary">
                                            <li><a>Your Visit</a></li>
                                            <li><a>Conditions</a></li>
                                            <li><a>Clinics</a></li>
                                            <li><a>Research</a></li>
                                            <li><a>Health &amp; Safety</a></li>
                                            <li><a>Giving</a></li>
                                            <li><a>Media</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <SearchBar></SearchBar>;
            </div>
        )
    }
}