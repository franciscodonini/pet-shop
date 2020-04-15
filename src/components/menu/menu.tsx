import React from 'react';
import ButtonAdd from '../buttons/button-add-pet'
import ButtonAgenda from '../buttons/button-agenda'
import './menu.css';

export default class Menu extends React.Component {
    public render() {
        return (
            <div className="menu">
                <div className= "menuButton">
                    <ButtonAdd />
                </div>   
                <div className= "menuButton">                    
                    <ButtonAgenda />
                </div>
           </div>
        )   
    }
}