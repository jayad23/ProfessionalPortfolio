import React from "react";
//BlogPosts
export const BlogPosts = ({ id, title, link })=>{
    return (
        <>
            <article className="posts-container">
                <h1>{ title }</h1>
                <p>Article number: {id}</p>
                <a href={link} target="_blank" rel="noreferrer">Click here to see Post</a>
            </article>
        </>
    )
}