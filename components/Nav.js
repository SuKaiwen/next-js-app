import React from 'react';
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

function Nav(props) {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.navLogo}>[A] aircnc</div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/host">Become a host</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;