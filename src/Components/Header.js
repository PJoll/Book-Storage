import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Book Management </h1>
        <hr/>
        <div className="links">
            <NavLink to="/" className={"link"} activeClassName={"active"} exact={true}>Books List</NavLink>
            <NavLink to="/add" className={"link"} activeClassName={"active"}>Add Book</NavLink>
            <NavLink
        </div>
        </header>
    )
}

export default Header;
