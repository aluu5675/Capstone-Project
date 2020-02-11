import React from 'react';

let Component = React.Component;

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <div className="mission-statement"></div>
                <div className="begin-search">
                    <div className='categories'>
                        <img src='img/housing.png' alt='housing assistance' className='categoryButton'></img>
                        <img src='img/housing.png' alt='housing assistance' className='categoryButton'></img>
                    </div>
                </div>
            </div>
        )
    }
}