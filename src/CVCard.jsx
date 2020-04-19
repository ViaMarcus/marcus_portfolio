import React from "react"

const CVCard = ({ cv }) => {
    return (
        <>
            <div class="ui card cv">
                
                <div class="card-left">
                    <h3 class="ui header">{ cv.type } </h3>
                    <h2>  { cv.company }</h2>
                    <a>{ cv.title }</a>
                    <a>{ cv.time }</a>
                    {/* <div class="image">
                        <img src={ cv.image } alt="failed to load" title={cv.imageAlt}/>
                    </div> */}
                </div>
                <div class="content">
                    <div class="description">{ cv.stuffDone }</div>
                </div>
            </div>
        </>
    )
};

export default CVCard;