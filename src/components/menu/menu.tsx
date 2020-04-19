import React from 'react';
import {Link} from 'react-router-dom';
import ButtonAdd from '../buttons/button-add-pet'
import ButtonAgenda from '../buttons/button-agenda'
import './menu.css';

export default class Menu extends React.Component {
    public render() {
        return (
            <div className="menu">
                <div className= "menuButton">
                    <Link className="button" to="/agenda" >Agenda</Link>
                </div>   
                <div className= "menuButton">                    
                    <Link className="button" to="/adicionarPet" >Adicionar Pet</Link>
                </div>
                <div className= "menuButton">                    
                    <Link className="button" to="/fluxoDeCaixa" >Fluxo de Caixa</Link>
                </div>
           </div>
        )   
    }
}
