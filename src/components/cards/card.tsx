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
                        <div id="horaSaida">Saída: {mockedData.horaSaida}</div>
                        <div id="petNome">Pet: {mockedData.petNome}</div>
                        <div id="nomeDono">Dono: {mockedData.nomeDono}</div>
                        <div id="contato">Contato: {mockedData.contatoDono}</div>
            </div>
        )
    }
}
