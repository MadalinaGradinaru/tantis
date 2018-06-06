import ReactDOM from 'react-dom';import './App.css';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/content';
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
            <Routes path='/login' component={Login} display={false}/>
            <Routes exact path="/" component={Home} display={false}/>
            <Routes path='/users' component={Users} display={false}/>
        </div>
    )
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
