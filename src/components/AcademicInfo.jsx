import React from "react";

export const AcademicInfo = ( props )=>{
    const {
        degree, where,
        isOnline, isComplete,
        finishedIn,icon
    } = props;

    return(
        <div className='div-info'>
            <span>
                <i className={icon}></i>
            </span>
            <article>
                <h4>{degree}</h4>
                <h6>{where}</h6>
                <h6>{isOnline ? 'Online' : 'On Site'}</h6>
                <h6>{isComplete ? `Completed in ${finishedIn}` : 'In Progress.'}</h6>
            </article>
        </div>
    )
}