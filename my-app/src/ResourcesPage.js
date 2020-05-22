import React from 'react';
import './style.css';

// component representing full resource page
export class ResourcesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            numResources: 10,
            resources: []
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
        this.setState({selectedTags: newTags, numResources: this.state.numResources, resources: this.state.resources})
    }

    // handles loading more resources (adds 5 to limit)
    handleLoad = () => {
        this.setState({numResources: this.state.numResources + 5, selectedTags: this.state.selectedTags, resources: this.state.resources})
    }

    // displayed resources are hard-coded and defined here, but they could just as easily be passed in as a JSON or .csv format from an external source
    // ADD NEW RESOURCES HERE
    componentDidMount() {
        let resources = []
        if (this.props.match.params.resourceType === "food") {
            resources = [
                {
                    resourceName: "Food Banks", 
                    resourceDescription: "List of programs and food banks in Washington to help find or buy food", 
                    resourceType:"PDF",
                    tags: ["food", "english", "spanish", "seattle", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2441.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2441s.pdf"}
                    ]
                },
                {
                    resourceName: "Saving Dollars on Food", 
                    resourceDescription: "Tips and tricks for saving money when buying food", 
                    resourceType:"PDF",
                    tags: ["food", "english", "seattle", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/ce/CE431-saving-dollars-on-food.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/ce/CE431S-saving-dollars-on-food.pdf"}
                    ] 
                },
                {
                    resourceName: "Restaurants", 
                    resourceDescription: "Some of the restaurants within 2 miles of Seattle Children’s", 
                    resourceType:"PDF",
                    tags: ["food", "english", "seattle", "spanish", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi601.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi601s.pdf"}
                    ] 
                },
                {
                    resourceName: "Blessed Sacrament Food Bank", 
                    resourceDescription: "Dinner served Sundays 12PM- 2:00PM. Food Bank is open Fridays, 10:30AM - 12PM", 
                    resourceType:"Website",
                    tags: ["seattle", "food", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "Website", link: "http://www.blessed-sacrament.org/outreach"}
                    ]
                },
                {
                    resourceName: "Jewish Family Service Food Bank", 
                    resourceDescription: 
                    "We serve anyone in the Puget Sound region's Jewish community and people of all backgrounds who live in the Capitol Hill neighborhood and surrounding zip codes.", 
                    resourceType:"Website",
                    tags: ["seattle", "food", "english", "in-patient", "out-patient", "kirkland"],
                    links: [
                        {label: "Website", link: "https://www.jfsseattle.org/"}
                    ]
                }
            ]
        } else if (this.props.match.params.resourceType === "housing") {
            resources = [
                {
                    resourceName: "Guide for Relocating to Seattle",
                    resourceDescription: 
                    "This handout is for prenatal patients, with and without Medicaid, expecting a baby who will be admitted to Seattle Children’s shortly after birth. Use the guiding steps " +
                    "below to help you plan your temporary relocation to Seattle and prepare for your delivery.",
                    resourceType: "PDF",
                    tags: ["seattle", "english", "spanish", "in-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2810.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2810s.pdf"}
                    ]
                },
                {
                    resourceName: "Transportation, housing, and preparing for your visit",
                    resourceDescription: 
                    "General contact information from Guest Services for housing and transportation options near Seattle Children's",
                    resourceType: "PDF",
                    tags: ["seattle", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1200.pdf"}
                    
                    ]
                },
                {
                    resourceName: "Family Resource Center",
                    resourceDescription: 
                    "Resource center located within Seattle Children's that provides basic amenities such as private showers, laundry rooms, cell phone chargers, computers with Wi-Fi access, " +
                    "and free coffee/ tea",
                    resourceType: "PDF",
                    tags: ["seattle", "english", "spanish", "in-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198s.pdf"}
                        
                    ]
                },
                {
                    resourceName: "Places to Stay (While your child is staying at Seattle Children's)",
                    resourceDescription: 
                    "This handout outlines all the different housing options Seattle Children's both sponsors and provides in the Seattle area",
                    resourceType: "PDF",
                    tags: ["seattle", "english", "spanish", "arabic", "in-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi600.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi600s.pdf"},
                        {label: "Arabic", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi600a.pdf"} 
                    ]
                },
                {
                    resourceName: "Places to Stay in Bellevue (While your child is staying at Seattle Children's)",
                    resourceDescription: 
                    "This handout outlines all the different housing options Seattle Children's both sponsors and provides in the Bellevue area.",
                    resourceType: "PDF",
                    tags: ["bellevue", "english", "in-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1088.pdf"}
                    ]
                },
                {
                    resourceName: "RV Parking at Children's",
                    resourceDescription: 
                    "We have a few spaces that can accommodate family members staying in trailers, motor homes or campers. The parking space must be reserved in advance.",
                    resourceType: "PDF",
                    tags: ["seattle", "english", "in-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1144.pdf"}
                    ]
                }
            ]
        } else if (this.props.match.params.resourceType === "transportation") {
            resources = [
                {
                    resourceName: "Transportation Options", 
                    resourceDescription: "List of options for getting to and from Seattle Children's", 
                    resourceType:"PDF",
                    tags: ["english", "spanish", "seattle","in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi602.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi602s.pdf"},
                        {label: "Arabic", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi602a.pdf"}
                    ]
                },
                {
                    resourceName: "Travel Funding Resources for Craniofacial Patients", 
                    resourceDescription: "", 
                    resourceType:"PDF",
                    tags: ["english", "spanish", "seattle", "in-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1877.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1877s.pdf"}
                    ]
                },
            ]
        } else if (this.props.match.params.resourceType === "mental_health") {
            resources = [
                {
                    resourceName: "Choosing a Mental Health Provider", 
                    resourceDescription: "Mental health providers have different training and ways of treating children and teens. It is important to find a mental health provider who has" +
                    "received special training and education to treat children and teens, and whose experience and training are a good fit for your child and family.", 
                    resourceType:"PDF",
                    tags: ["english", "seattle", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1739.pdf"},
                    ]
                },
                {
                    resourceName: "Mental Health Problems", 
                    resourceDescription: "", 
                    resourceType:"Website",
                    tags: ["english", "seattle", "in-patient", "out-patient"],
                    links: [
                        {label: "Website", link: "https://www.seattlechildrens.org/conditions/a-z/mental-health-problems/"},
                    ]
                }
            ]
        } else if (this.props.match.params.resourceType === "hygiene") {
            resources = [
                {
                    resourceName: "Family Resource Center", 
                    resourceDescription: "Seattle Children's facility that provides essentials such as showers, lockers, a laundry room, and snacks/ coffee!", 
                    resourceType:"PDF",
                    tags: ["english", "seattle", "in-patient", "out-patient", "spanish"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198s.pdf"}
                    ]
                }
            ]
        } else if (this.props.match.params.resourceType === "technology") {
            resources = [
                {
                    resourceName: "Family Resource Center", 
                    resourceDescription: "Seattle Children's facility that provides essentials such as showers, lockers, a laundry room, and snacks/ coffee!", 
                    resourceType:"PDF",
                    tags: ["english", "seattle", "in-patient", "out-patient", "spanish"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198s.pdf"}
                    ]
                }
            ]
        } else if (this.props.match.params.resourceType === "popular") {
            resources = [
                {
                    resourceName: "Family Resource Center", 
                    resourceDescription: "Seattle Children's facility that provides essentials such as showers, lockers, a laundry room, and snacks/ coffee!", 
                    resourceType:"PDF",
                    tags: ["english", "seattle", "in-patient", "out-patient", "spanish"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi198s.pdf"}
                    ]
                },
                {
                    resourceName: "Transportation Options", 
                    resourceDescription: "List of options for getting to and from Seattle Children's", 
                    resourceType:"PDF",
                    tags: ["english", "spanish", "seattle","in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi602.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi602s.pdf"},
                        {label: "Arabic", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pi602a.pdf"}
                    ]
                },
                {
                    resourceName: "Transportation, housing, and preparing for your visit",
                    resourceDescription: 
                    "General contact information from Guest Services for housing and transportation options near Seattle Children's",
                    resourceType: "PDF",
                    tags: ["seattle", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe1200.pdf"}
                    
                    ]
                },
                {
                    resourceName: "Food Banks", 
                    resourceDescription: "List of programs and food banks in Washington to help find or buy food", 
                    resourceType:"PDF",
                    tags: ["food", "english", "spanish", "seattle", "english", "in-patient", "out-patient"],
                    links: [
                        {label: "English", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2441.pdf"},
                        {label: "Spanish", link: "https://www.seattlechildrens.org/globalassets/documents/for-patients-and-families/pfe/pe2441s.pdf"}
                    ]
                }
            ]
        }
        this.setState({
            numResources: this.state.numResources,
            selectedTags: this.state.selectedTags,
            resources: resources
        }) 
    }
    
    render() {
        // capitalize resourcetype URL parameter
        let titleDisplay = this.props.match.params.resourceType
        titleDisplay = titleDisplay.replace(/_/g, ' ');
        titleDisplay = titleDisplay.replace(/\b./g, function(m){ return m.toUpperCase(); });
        return (
            <body>
                <main className="flex-container">
                    <div className="content">                    
                        <h1 className="resource-title">{titleDisplay} Resources</h1>
                        <div>
                            <ResourceList resources={this.state.resources} selectedTags={this.state.selectedTags} numResources ={this.state.numResources}/>
                        </div>
                        <p>
                            <input type="image" src="img/load_button.PNG" alt="load more resources" onClick={this.handleLoad} className="load-button"></input> 
                        </p>
                    </div>
                    
                    <div className="sidebarContainer">
                        <SideNav callback={this.handleFilter}/>
                    </div>
                </main>
            </body>
        )
    }
}


// component representing full list view of all rendered resources
export class ResourceList extends React.Component{
    render() {
        let numLoadedResources = 0
        let selectedTags = this.props.selectedTags
        // takes in an object with fields 'resourceName' and 'resourceDescription' and creates an array of individual resource components  
        let resourceItems = this.props.resources.map((resource) => {
            if (numLoadedResources < this.props.numResources) {
                // defines which resources should be displayed
                if (selectedTags.length === 0 || selectedTags.every(val => resource.tags.includes(val))) {
                    let resourceComponent = <ResourceItem resource={resource}/>;
                    numLoadedResources++;
                    return resourceComponent;
                }
            }
        })
        return (resourceItems)
    }
}

// component representing an individual resource item
export class ResourceItem extends React.Component{
    render() {
        let resource = this.props.resource
        let links = resource.links.map((link) => {
            return (
                <a href={link.link}>
                    <button className="resource-button">{link.label}</button>
                </a>
            )
        })
        return (
            <div>
                <h3 className="resource-title-text">{resource.resourceName}</h3>
                <p className="resource-body-text">{resource.resourceDescription}</p>
                <p className="resource-body-text">{resource.resourceType}: {links}</p>
                <hr></hr>
            </div>
        )
    }
}

// component representing side navigation/ filter bar
export class SideNav extends React.Component {
    render() {
        // list of enabled filters, by category
        let languages = ["english", "spanish", "arabic"].map((language) => {
            return <CheckBox tag={language} callback={this.props.callback}/>
        })
        let locations = ["seattle", "bellevue", "kirkland"].map((location) => {
            return <CheckBox tag={location} callback={this.props.callback}/>
        })
        let inPatientStatus = ["in-patient", "out-patient"].map((location) => {
            return <CheckBox tag={location} callback={this.props.callback}/>
        })
        return(
            <div className="sidebar">
                <h4 className="filter-label">Filters</h4>
                <p className="filter-category">Language</p>
                <hr></hr>
                <div className="checkGroup">
                    {languages}
                </div>
                <p className="filter-category">Location</p>
                <hr></hr>
                <div className="checkGroup">
                    {locations}
                </div>
                <p className="filter-category">In vs. Out Patient</p>
                <hr></hr>
                <div className="checkGroup">
                    {inPatientStatus}
                </div>
            </div>
        )
    }
}

// component representing individual 
export class CheckBox extends React.Component {
    handleClick = () => {
        this.props.callback(this.props.tag);
    }    
    render() {
        let capitalizedTag = this.props.tag.charAt(0).toUpperCase() + this.props.tag.slice(1);
        return(
            <div className="resource-checkbox-text">
                <input type="checkbox" id={this.props.tag} name={this.props.tag} value={this.props.tag} onClick={this.handleClick}></input>
                <label for={this.props.tag} className="filter-name">{capitalizedTag}</label>
                <br></br>
            </div>
        )
    }
}


