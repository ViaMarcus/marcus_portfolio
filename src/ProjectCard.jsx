import React from "react"

class ProjectCard extends React.Component {

    setPopup = () => {
        this.props.setPopup(this.props.project)
    }





    render() {
        let project = this.props.project
        return (
        <div className="ui card project" onClick = { this.setPopup }>
            
            <div className="card-left">
                <h2 className="ui header">{project.name}</h2>
                <div className="image">
                    <img src={ project.image } alt="failed to load" title={project.imageAlt}/>
                </div>
            </div>
            <div className="content">
                <div className="description">{project.description}</div>
            </div>
            
        </div>
        )
    }
};

export default ProjectCard;