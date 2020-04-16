import React from 'react';
import './card.css'

const mockedData = {
    horaSaida: "16:00",
    petNome: "Flash",
    nomeDono: "Francisco",
    contatoDono: "(051)98937-4791"
}
export default class Card extends React.Component {
    public render() {
        return (
            <div className="card">
                <div className="dados">Saída: {mockedData.horaSaida}</div>
                <div className="dados">Pet: {mockedData.petNome}</div>
                <div className="dados">Dono: {mockedData.nomeDono}</div>
                <div className="dados">Contato: {mockedData.contatoDono}</div>
            </div>
        )
    }
}
