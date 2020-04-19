import React from 'react';
import './logo.css';
import Imagelogo from "../../assets/images/logo.jpg";

export default class Logo extends React.Component {
    public render() {
        return (
            <div className="logo"> 
                <img src= {Imagelogo} alt="logo" width="180px"  /> 
            </div>
        )
    }
}
