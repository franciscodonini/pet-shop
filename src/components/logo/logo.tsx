import React from 'react';
import Imagelogo from "../../assets/images/logo.png"


export default class Logo extends React.Component {
    public render() {
        return <div> <img src= {Imagelogo} alt="logo" width="150px" /> </div>;
    }
}
