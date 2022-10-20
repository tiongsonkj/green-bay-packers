import React from 'react';
import logo from '../assets/logo.png';
import './components.scss';

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron"><img src={logo} alt="logo"/></div>
        </>
    )
};

export default Jumbotron;