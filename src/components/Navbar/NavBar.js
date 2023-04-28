import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {

    return (<>
    <div className="Nav_header">
        <h1 className="header">GameGram</h1>
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/Posts">View All Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/CreatePost">Create New Post</Link>
            </li>

               </ul></div>
   </> )
}