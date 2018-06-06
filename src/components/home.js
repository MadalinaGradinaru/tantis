import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render() {
        return (
            <div>
                Welcome to Tantis
                <Link to={'/login'}>Login</Link>
            </div>
        )
    }

}

export default Home;