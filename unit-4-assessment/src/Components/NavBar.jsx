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
                        <li><strong>Youtube</strong></li>
                        <li><Link to='/' className='nav-link'>Home</Link></li>
                        <li><Link to='/about' className='nav-link'>About</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/'>
                       < Homepage/>
                    </Route>
                    {/* <Route path='/videos/:id'/> */}
                    <Route exact path='/about'>
                        <About />
                    </Route>
                   
                </Switch>
            </div>
        </Router>

    )
}

export default NavBar