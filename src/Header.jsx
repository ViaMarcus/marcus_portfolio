import React from "react"
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="ui fixed inverted menu">
            <div className="ui container">
                <Link id="header" className="header item" to= "/">My Portfolio</Link>
                <div className="right menu">
                    <NavLink
                        id="about-tab"
                        className="ui item"
                        activeStyle={{ fontweight: "bold" }}
                        to="/about"
                    >About me</NavLink>
                    <NavLink
                        id="projects-tab"
                        className="ui item"
                        activeStyle= {{ fontWeight: "bold" }}
                        to="/projects"
                        >Projects</NavLink>
                    <NavLink
                        id="cv-tab"
                        className="ui item"
                        activeStyle= {{ fontWeight: "bold" }}
                        to="/cv"
                    >CV</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;