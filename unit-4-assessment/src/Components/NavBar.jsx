import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'


const NavBar = () => {
    return (

        <div>
            <nav className='NavBar'>
                <ul>
                    <li><strong>Youtube</strong></li>
                    <li><Link to='/' className='nav-link'>Home</Link></li>
                    <li><Link to='/about' className='nav-link'>About</Link></li>
                </ul>
            </nav>
        <div>
            <Switch>

                <Route exact path='/' component={Homepage}/>
        

                {/* <Route path='/videos/:id' render={(props) => (
                    <Video key={this.props.id} />
                )}>

                </Route> */}

                <Route path='/about' component={About}/>
               

            </Switch>
                </div>
              
            </div>

    )
}

export default NavBar