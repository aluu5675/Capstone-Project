import React, { Component } from 'react';
import './style.css';

// resourceConnector.js connects components related to the resources page

// component representing an individual resource item
export class ResourceItem extends React.Component{
    render() {
        let resourceName = this.props.resourceName;
        let resourceDescription = this.props.resourceDescription 
        return (
            <li>
                <h3>{resourceName}</h3>
                <p>{resourceDescription}</p>
            </li>
        )
    }
}

// component representing full list view of all rendered resources
export class ResourceList extends React.Component{
    render() {
        // takes in an object with fields 'resourceName' and 'resourceDescription' and creates an array of individual resource components  
        let resourceItems = this.props.resources.map((resource) => {
             let resourceComponent = <ResourceItem resourceName = {resource.resourceName} resourceDescription={resource.resourceDescription}/>;
             return resourceComponent;
        })
        return (resourceItems)
    }
}

// component representing full resource page
export class ResourcesPage extends React.Component {
    render() {
        let resources = [
            {resourceName: "Food Banks", resourceDescription: "List of programs and food banks in Washington to help find or buy food"},
            {resourceName: "Saving Dollars on Food", resourceDescription: "Tips and tricks for saving money when buying food"}
        ]
        return (
            <body>
                <nav>

                </nav>
                <main className="flex-container">
                    <div className="sidenav">

                    </div>
                    <div className="content">
                        <h1>Food Resources</h1>
                        <ul>
                            <ResourceList resources={resources} />
                        </ul>
                    </div>
                </main>
            </body>
        )
    }
}