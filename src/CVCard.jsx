import React from "react"

const CVCard = ({ cv }) => {
    return (
        <>
            <div className="ui card cv">
                
                    <h4 className="ui header">{ cv.type } </h4> <a>{ cv.time }</a>
                    <h3>  { cv.company }</h3>
                    <p>{ cv.title }</p>
                    
                    <div className="image">
                        <img src={ cv.image } alt="failed to load" title={cv.imageAlt}/>
                        <div className="content">
                            <div className="description">{ cv.stuffDone }</div>
                        </div>
                </div>

            </div>
        </>
    )
};

export default CVCard;