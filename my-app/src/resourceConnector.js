import React, { Component } from 'react';
import './style.css';

// resourceConnector.js connects components related to the resources page

// component representing an individual resource item
export class ResourceItem extends React.Component{
    render() {
        let resource = this.props.resource
        let links = resource.links.map((link) => {
            return (
                <a href={link.link}>
                    <button>{link.label}</button>
                </a>
            )
        })
        return (
            <div>
                <h3>{resource.resourceName}</h3>
                <p>{resource.resourceDescription}</p>
                <p>{resource.resourceType}: {links}</p>
                <hr></hr>
            </div>
        )
    }
}

// function used in filter operation to determine whether resource meets criteria
function arrayContainsAnotherArray(needle, haystack){
    for(var i = 0; i < needle.length; i++){
      if(haystack.indexOf(needle[i]) === -1)
         return false;
    }
    return true;
  }

// component representing full list view of all rendered resources
export class ResourceList extends React.Component{
    render() {
        let numLoadedResources = 0
        let selectedTags = this.props.selectedTags
        // takes in an object with fields 'resourceName' and 'resourceDescription' and creates an array of individual resource components  
        let resourceItems = this.props.resources.map((resource) => {
            // TO-DO:
            // handle generating resources based on selected tags
            if (numLoadedResources < this.props.numResources) {
                if (selectedTags.length == 0 || arrayContainsAnotherArray(selectedTags, resource.tags)) {
                    let resourceComponent = <ResourceItem resource={resource}/>;
                    numLoadedResources++;
                    console.log(numLoadedResources)
                    return resourceComponent;
                }
            }
        })
        return (resourceItems)
    }
}

// component representing side navigation bar
export class SideNav extends React.Component {
    render() {
        // list of enabled filters, by category
        let resourceTypes = ["food", "housing", "transportation", "other"].map((resourceType) => {
            return <CheckBox tag={resourceType} callback={this.props.callback}/>
        })
        let languages = ["english", "spanish", "russian", "vietnamese", "somali"].map((language) => {
            return <CheckBox tag={language} callback={this.props.callback}/>
        })
        let locations = ["seattle", "tacoma", "kirkland"].map((location) => {
            return <CheckBox tag={location} callback={this.props.callback}/>
        })
        return(
            <div className="sidebar">
                <h4>Filters</h4>
                <p>Resource Type</p>
                <hr></hr>
                <div className="checkGroup">
                    {resourceTypes}
                </div>
                <p>Language</p>
                <hr></hr>
                <div className="checkGroup">
                    {languages}
                </div>
                <p>Location</p>
                <hr></hr>
                <div className="checkGroup">
                    {locations}
                </div>
            </div>
        )
    }
}

export class CheckBox extends React.Component {
    handleClick = () => {
        this.props.callback(this.props.tag);
    }    
    render() {
        let capitalizedTag = this.props.tag.charAt(0).toUpperCase() + this.props.tag.slice(1);
        return(
            <div>
                <input type="checkbox" id={this.props.tag} name={this.props.tag} value={this.props.tag} onClick={this.handleClick}></input>
                <label for={this.props.tag}>{capitalizedTag}</label>
                <br></br>
            </div>
        )
    }
}

// component representing full resource page
export class ResourcesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            numResources: 10
        }
    }
    // callback function to be passed down to sidebar to handle filter election
    handleFilter = (changedTag) => {
        let newTags = this.state.selectedTags;
        if (this.state.selectedTags.includes(changedTag)) {
            const index = newTags.indexOf(changedTag);
            newTags.splice(index, 1)
        } else {
            newTags.push(changedTag)
        }
        this.setState({selectedTags: newTags, numResources: this.state.numResources})
    }

    // handles loading more resources (adds 5 to limit)
    handleLoad = () => {
        this.setState({numResources: this.state.numResources + 5, selectedTags: this.state.selectedTags})
    }
    // displayed resources hard-coded and defined here, but could just as easily be passed in as a JSON or .csv
    // format from an external source
    // ADD NEW RESOURCES HERE
    render() {
        let resources = [
            {
            resourceName: "Food Banks", 
            resourceDescription: "List of programs and food banks in Washington to help find or buy food", 
            resourceType:"PDF",
            tags: ["food", "english", "spanish", "seattle"],
            links: [
                {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2441.pdf"},
                {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2441s.pdf"}
            ]
            },
            {
            resourceName: "Saving Dollars on Food", 
            resourceDescription: "Tips and tricks for saving money when buying food", 
            resourceType:"PDF",
            tags: ["food", "english", "seattle"],
            links: [
                {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/ce/CE431-saving-dollars-on-food.pdf"},
                {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/ce/CE431S-saving-dollars-on-food.pdf"}
            ] 
            },
            {
            resourceName: "Blessed Sacrament Food Bank", 
            resourceDescription: "Dinner served Sundays 12PM- 2:00PM. Food Bank is open Fridays, 10:30AM - 12PM", 
            resourceType:"Website",
            tags: ["seattle", "food"],
            links: [
                {label: "Website", link: "http://www.blessed-sacrament.org/outreach"}
            ]
            },
            {
            resourceName: "Jewish Family Service Food Bank", 
            resourceDescription: 
            "We serve anyone in the Puget Sound region's Jewish community and people of all backgrounds who live in the Capitol Hill neighborhood and surrounding zip codes.", 
            resourceType:"Website",
            tags: ["seattle", "food"],
            links: [
                {label: "Website", link: "https://www.jfsseattle.org/"}
            ]
            }
        ]
       
        return (
            <body>
                <nav>
                    Filler Navigation
                </nav>
                <main className="flex-container">
                    <div className="content">                    
                        <h1>Food Resources</h1>
                        <div>
                            <ResourceList resources={resources} selectedTags={this.state.selectedTags} numResources ={this.state.numResources}/>
                        </div>
                        <div>
                            <button onClick={this.handleLoad}>Load More Resources</button>
                        </div>
                    </div>
                    
                    <div className="sidebarContainer">
                        <SideNav callback={this.handleFilter}/>
                    </div>
                </main>
            </body>
        )
    }
}

