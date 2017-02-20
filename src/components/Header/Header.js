import  React from "react";
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => {
    return (
        <li className="menu_item">
            <Link to={to} className={`${active ? 'active' : ''}`}>
                {children}
            </Link>
        </li>
    );
};

const Header = (props) => {
    const {router} = props;
    return (
        <div className="header">
            <p className="logo">React</p>
            <ul className="top_menu clearfix">
                <MenuItem to={ "/" } active={router.isActive('/', true)}>Home</MenuItem>
                <MenuItem to={ "/memopad" } active={router.isActive('/memopad')}>Memopad</MenuItem>
                <MenuItem to={ "/ajax" } active={router.isActive('/ajax')}>Ajax</MenuItem>
            </ul>
        </div>
    );
};

export default Header;
