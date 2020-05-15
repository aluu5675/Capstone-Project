import React from 'react';

let Component = React.Component;

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <main>
                    <div className="homepage-hero">
                        <img src='../img/homepage.jpg' alt='homepage image' className='homeImg'></img>
                        <div className='inner'>
                            <div className="happy-wrapper">
                                <h1 className='no-line'>Bringing Hope</h1>
                                <p className="body-large">Happy Hospital is here to help your child, your family, and you. We provide
                                    assistance for medical conditions your child might have, as well as support
                                    support your family in other ways.
                                </p>
                                <div className="button-large">See how Happy Hospital can help you &amp; your family</div>
                            </div>
                        </div>
                    </div>
                    <div className="section homepage-section">
                        <div className="inner">
                            <div>
                                <div>
                                    <div className="unit delta-size1of2">
                                        <div className="homepage--featured">
                                            <div className="has-overlay">
                                                <img src="img/compassionate.jpg" alt='urgent care'></img>
                                            </div>
                                            <div className="urgent">
                                                <h4>Compassionate Care</h4>
                                                <h1>Urgent Care Clinics Now Open at 4 p.m. on Weekdays</h1>
                                                <p className="body-large">Our specially trained pediatric urgent care teams are
                                                    available 7 days a week, including holidays, in Seattle,
                                                    Bellevue, Everett, and Federal Way. Learn more about our 
                                                    kid-focused urgent care clinics for minor illness and injuries.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="unit delta-size1of2">
                                        <div className="homepage--featured">
                                            <div className="has-overlay">
                                                <img src="img/research.jpg" alt='urgent care'></img>
                                            </div>
                                            <div className="urgent">
                                                <h4>Breakthrough Research</h4>
                                                <h1>Accelerating Pediatric Research</h1>
                                                <p className="body-large">Our specially trained pediatric urgent care teams are
                                                    available 7 days a week, including holidays, in Seattle,
                                                    Bellevue, Everett, and Federal Way. Learn more about our 
                                                    kid-focused urgent care clinics for minor illness and injuries.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section homepage-section">
                        <div className="inner">
                            <div className="unit delta-size1of3">

                            </div>
                            <div className="unit delta-size1of3">
                                
                            </div>
                            <div className="unit delta-size1of3">
                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}