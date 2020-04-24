import React, { Component } from 'react';
import './style.css';

// resourceConnector.js connects components related to the resources page

// component representing an individual resource item
export class ResourceItem {
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
export class ResourceList {
    render() {
        // takes in an object with fields 'resourceName' and 'resourceDescription' and creates an array of individual resource components  
        let resourceItems = this.props.resources.map((resource) => {
             let resourceComponent = <ResourceItem resourceName = {resource.resourceName} resourceDescription={resource.resourceDescription}/>;
             return resourceComponent;
        })
    }
}

export class ResourcesPage {
    render() {
        let 
        return (
            <body>
                <nav>

                </nav>
                <main>
                    <h1>Food Resources</h1>

                </main>
            </body>
        )
    }
}