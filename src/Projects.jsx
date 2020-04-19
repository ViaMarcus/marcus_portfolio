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
                projects: response.data
            })
        })
    }

    render() {
        const projects = this.state.projects;
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div id={'project-' + project.id} class= "project-div" key={project.id}>
                        <ProjectCard project={ project } />
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
                <div class="project-grid">
                    {projectsList}
                </div>
            </div>
            <Popup project= { popup }/>
        </>
        );
    }
}

export default Projects;