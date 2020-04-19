import React from "react"

const ProjectCard = ({ project }) => {
    return (
        <>
            <div class="ui card project">
                
                <div class="card-left">
                    <h2 class="ui header">{project.name}</h2>
                    <div class="image">
                        <img src={ project.image } alt="failed to load" title={project.imageAlt}/>
                    </div>
                </div>
                <div class="content">
                    <div class="description">{project.description}</div>
                </div>
                
            </div>
        </>
    )
};

export default ProjectCard;