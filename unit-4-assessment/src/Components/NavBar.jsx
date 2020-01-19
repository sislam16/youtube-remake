import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'


const NavBar = () => {
    return (
        <Router>
            <div>
                <nav className = 'NavBar'>
                    <ul>
                        <li><strong>YouTube</strong></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>

            </div>
        </Router>

    )
}

export default NavBar