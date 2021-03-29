import React, { Component } from 'react'
import './navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center header-text">Add your TODOs here...!</h2>

                <u><h3 className="text-center header-text">Open | Closed</h3></u>

            </div>

        )
    }
}
