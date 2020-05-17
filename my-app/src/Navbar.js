import React from 'react';
import { SearchBar } from './SearchBar.js';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
                                    <Link to='/'>
                                        <input type="image" src="img/happylogo.png" alt='homepage logo' className='homeLogo'></input>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-right">
                                <div className="globalSearch-container">

                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="sticky-nav-container">
                        <div className="flex-left">
                            <nav className="primary-nav main-nav-off-canvas off-canvas">
                                <div className="menu clearfix">
                                    <ul className="menu-primary">
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/patients-families/">Your Visit</a></li>
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/conditions/">Conditions</a></li>
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/clinics/">Clinics</a></li>
                                        <li className="menu-item"><Link to='/resources'>Family Resources</Link></li>
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/research/">Research</a></li>
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/health-safety/">Health &amp; Safety</a></li>
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/giving/">Giving</a></li>
                                        <li className="menu-item"><a href="https://www.seattlechildrens.org/media/">Media</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    
                </header>
               
            </div>
        )
    }
}