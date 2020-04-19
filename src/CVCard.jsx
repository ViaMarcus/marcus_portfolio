import React from "react"

const CVCard = ({ cv }) => {
    return (
        <>
            <div className="ui card cv">
                
                <div className="card-left">
                    <h3 className="ui header">{ cv.type } </h3>
                    <h2>  { cv.company }</h2>
                    <a>{ cv.title }</a>
                    <a>{ cv.time }</a>
                    {/* <div class="image">
                        <img src={ cv.image } alt="failed to load" title={cv.imageAlt}/>
                    </div> */}
                </div>
                <div className="content">
                    <div className="description">{ cv.stuffDone }</div>
                </div>
            </div>
        </>
    )
};

export default CVCard;