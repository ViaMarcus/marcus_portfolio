import React from 'react'

const Popup = ({ project }) => {

    if (project == null) {
        return null
    } else {
    return (
        <>
            <div id="popup">
                <h2>{ project.name }</h2>
                <p>{ project.description}</p>
            </div>
        </>
    );}
};

export default Popup