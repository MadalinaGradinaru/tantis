import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { log } from '../../actions/login'

class Login extends Component {
    constructor() {
        super();

        this.login = this.login.bind(this)
    }
    login(e) {
        e.preventDefault();
        this.props.log()
    }

    render() {
        return (
            <div className='row'>
                Welcome on Tantis
                <form>
                    <input placeholder='User Name'/>
                    <input placeholder='Password'/>
                    <button className='btn' onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
            log: log
        },
        dispatch
    );
};


export default connect(mapStateToProps, matchDispatchToProps)(Login);