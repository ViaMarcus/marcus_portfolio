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
                <p>{ project.description}</p>
            </div>
        </div>
        </>
    );}
    }
};

export default Popup