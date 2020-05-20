import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export class Header extends React.Component {
    render(){
    return (
       <Router>
        <div>
            <nav className="NavBar">
                <div className="NavName">
                    <h2>Friends App</h2>
                </div>
                <ul className='NavLinks'>
                    <li>
                       <Link to='/Login'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/protected'>Friends</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </Router> 
    )
}
}
export default Header
