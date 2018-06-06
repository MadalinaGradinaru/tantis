import ReactDOM from 'react-dom';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Content from './components/content';
import store from './store'
import Login from './components/login/login';
import Users from './components/users/users';
import Home from './components/home';
import Menu from './components/menu';

const Routes = ({component: Component, path, exact, display}) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={() =>
            <div>
                <Menu display={display} url={path}/>
                <Content>
                    <Component/>
                </Content>
            </div>}
        />
    )
};

const App = () => {
    return (
        <div>
            <Routes path='/' component={Login} display={false}/>
            <Routes exact path="/home" component={Home} display={false}/>
            <Routes path='/users' component={Users} display={true}/>
        </div>
    )
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>    ,
    document.getElementById('root')
);
