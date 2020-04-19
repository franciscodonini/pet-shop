import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

export default class Menu extends React.Component {
    public render() {
        return (
            <div className="menu">
                <div className= "menuButton">
                    <Link className="button" to="/" >Home</Link>
                </div>   
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
