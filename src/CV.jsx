import React, { Component } from 'react'
import CVCard from "./CVCard"
import axios from "axios";

class CV extends Component {
    state = {
        cvItems: []
    };

    componentDidMount() {
        axios.get('./src/data/cv.json')
        .then(response => {
            this.setState({
                cvItems: response.data
            })
        })
    }

    render() {
        const cvItems = this.state.cvItems;
        let cvList;

        if (cvItems.length > 0) {
            cvList = cvItems.map(cv => {
                return (
                    <div id={'cv-' + cv.id} className= "cv-div" key={cv.id}>
                        <CVCard cv={ cv } />
                    </div>
                );
            })
        } else {
            <h3>No CV-items to show</h3>
        };
    

        return (
            <div className="ui main container">
                <h1 id="cv-header" className="ui header">Curriculum Vitae</h1>
                <div className="cv-grid">
                    {cvList}
                </div>
            </div>
        );
    }
}

export default CV;