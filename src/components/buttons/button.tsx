import React from 'react';

const mockedData = {
    nome: 'Francisco',
    endereco: 'Rua Dona Teodora',
};
export default class Button extends React.Component {
    public render() {
        return <div>{mockedData.nome}</div>;
    }
}
