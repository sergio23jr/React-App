import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <navbar className="navbar-dark bd-dark navbar-expand-lg">
                <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-item'>
                        <li className='navbar-item'>
                            <Link to='/' className='navbar-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='navbar-link'>Create Exercise Log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='navbar-link'>Create User</Link>
                        </li>

                    </ul>

                </div>
            </navbar>
        )
    }
}