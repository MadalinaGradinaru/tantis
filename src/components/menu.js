import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div className={this.props.display ? 'menu' : 'menu hidden'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/users'}>Users</Link>
            </div>
        )
    }

}

export default Menu;