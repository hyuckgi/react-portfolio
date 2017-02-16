import  React from "react";
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => {
    return (
        <li className="menu_item">
            <Link to={to} >
                {children}
            </Link>
        </li>
    );
};

const Header = () => {
    return (
        <div className="header">
            <p className="logo">Gadok Kwon</p>
            <ul className="top_menu clearfix">
                <MenuItem to={ "/" } >Home</MenuItem>
                <MenuItem to={ "memopad" } >Memopad</MenuItem>
                <MenuItem to={ "ajax" } >Ajax</MenuItem>
            </ul>
        </div>
    );
};

export default Header;
