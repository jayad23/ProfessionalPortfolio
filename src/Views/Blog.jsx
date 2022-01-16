import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfesionaInfoContext from "../Context/ProfesionalInfoContext";
import { BlogPosts } from "../components/blogPosts";
export const Blog = ()=>{
    const { Data } = useContext(ProfesionaInfoContext);
    const { blogPosts } = Data;
    return (
        <div className="container-posts">
            {
                blogPosts.map(blog =>
                    <BlogPosts
                        id = {blog.id}
                        title = {blog.title}
                        link = {blog.linkTo}
                    />
                )
            }
            <Link to="/about" className="back"><i className="fas fa-arrow-left"></i></Link>
        </div>
    )
}