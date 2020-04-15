import React from 'react';
import './button-add-pet.css';

export default class ButtonAdd extends React.Component {
    public render() {
        return (
            <div className= "addPet">
                <button className= "addPet">Adicionar Pet</button>
            </div>
        )          
    }
}
