import React from 'react';
import Card from '../cards/card'
import './columns.css';

export default class Columns extends React.Component {
    public render() {
        return (
            <div className="columns">
                <div className="column">
                    <div className="header">
                        <h3>Quarta-Feira 15/04</h3>
                    </div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="column">
                    <div className="header">
                            <h3>Quinta-Feira 16/04</h3>
                        </div>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />  
                    </div>
                <div className="column">
                <div className="header">
                        <h3>Sexta-Feira 17/04</h3>
                    </div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}