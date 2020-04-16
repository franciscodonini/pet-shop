import React from 'react';
import './card.css'
import ImageRecebido from "../../assets/images/recebido-card.png";
import ImageEntregue from "../../assets/images/entregue-card.png";

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
                <div className="buttonsCard">
                    <button className="recebido">
                        <img src={ImageRecebido} alt="recebido" width="20px" />
                    </button>
                    <button className="entregue">
                        <img src={ImageEntregue} alt="entregue" width="20px" />
                    </button>
                </div>
                <div className="dados">Saída: {mockedData.horaSaida}</div>
                <div className="dados">Pet: {mockedData.petNome}</div>
                <div className="dados">Dono: {mockedData.nomeDono}</div>
                <div className="dados">Contato: {mockedData.contatoDono}</div>
            </div>
        )
    }
}
