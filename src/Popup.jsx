import React from 'react'

class Popup extends React.Component {

    
    
    unset = (event) => {
        this.props.setPopup(event)
    }

    nothing = (event) => {
        event.stopPropagation()
    }

    render() {
    let project=this.props.project;
    if (project == null) {
        return null
    } else {
    return (
        <>
        <div className="coverall" onClick={this.unset}>
            <div id="popup" onClick={this.nothing}>
                <h2>{ project.name }</h2>
                <div className="divider">
                    <div className="image">
                        <img src={project.image} alt="failed to load"/>
                        <img src={project.screenshot}></img>
                    </div>
                    <div>
                        <p>{ project.description}</p>
                        <a href={project.repo}>Repo</a> | 
                        <a href={project.deployed}>Deployed site</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );}
    }
};

export default Popup