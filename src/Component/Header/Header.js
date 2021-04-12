import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/players">Players</a>
                <a href="/review">Review Selection</a>
                <a href="/manage">Team Name</a>
            </nav>
        </div>
    );
};

export default Header;