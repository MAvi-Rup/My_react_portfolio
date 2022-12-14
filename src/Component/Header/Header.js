import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-neutral text-neutral-content">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="bg-neutral menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='#projects' smooth={true} duration={2000}>Projects</Link></li>
                            
                            <li><a href='#education' smooth={true} duration={1000}>Education</a></li>
                            <li><a href='#contacts' smooth={true} duration={1000}>Contact</a></li>
                            <li><Link to='/blogs' smooth={true} duration={2000}>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Avirup Mondol</Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                    <li><a href='#projects' smooth={true} duration={1000}>Projects</a></li>
                    <li><a href='#education' smooth={true} duration={1000}>Education</a></li>
                    <li><a href='#contacts' smooth={true} duration={1000}>Contact</a></li>
                    <li><Link to='/blogs' smooth={true} duration={2000}>Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;