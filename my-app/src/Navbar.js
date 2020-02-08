import React from 'react';

let Component = React.Component;

export class Navbar extends Component {
    
    render() {
        return (
            <div>
                <div className="top-bar">
                    <p className="title-text">CONNECT 4</p>
                    <p className="slogan">Connecting people with their local resources for their everyday</p>
                </div>
            </div>
        )
    }
}