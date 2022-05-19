import React from "react";
import {Link} from "react-router-dom";
import "src/css/style.css";
export const NavBar = () =>{
    return(
        <div>
            <nav className="navBar">
                <li>
                    <Link to="/">Se timelines</Link> <br/>
                </li>
                <li>
                    <Link to="/">Se specifik timeline</Link> <br/>
                </li>
                <li>
                    <Link to= "/createtimeline">Lav ny timeline</Link> <br/>
                </li>
                <li>
                    <Link to="/">Lav nyt spot til en timeline</Link> <br/>
                </li>
                <li>
                    <Link to="/">Se alle lokationer</Link>
                </li>
            </nav>
        </div>
    )
}