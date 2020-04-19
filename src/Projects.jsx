import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import Popup from "./Popup"
import axios from "axios";

class Projects extends Component {
    state = {
        projects: [],
        popup: null
    };

    componentDidMount() {
        axios.get('./src/data/projects.json')
        .then(response => {
            this.setState({
                projects: response.data,
            })
        })

    }

    setPopup = (project) => {
        this.setState(state => ({ popup: project }))
    }

    removePopup = (event) => {
        this.setState(state => ({ popup: null}))
        console.log(event.currentTarget)
    }



    render() {
        const projects = this.state.projects;
        let projectsList
        
        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div id={'project-' + project.id} className= "project-div" key={project.id}>
                        <ProjectCard project={ project } setPopup={ this.setPopup } />
                    </div>
                );
            })
        } else {
            <h3>No Projects to show</h3>
        };
    

        return (
            
            <>
            <div className="ui main container">
                <h1 id="projects-header" className="ui header">My Projects</h1>
                <div className="project-grid">
                    {projectsList}
                </div>
            </div>
            <Popup project= { this.state.popup } setPopup = {this.removePopup}/>
        </>
        );
    }


}


export default Projects;