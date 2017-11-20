import React from 'react';

import Placar from './Placar';

const dados = {
    partida: {
        estadio: 'Maracanã/RJ',
        data: '19/11/2017',
        horario: '19h',
    },
    casa:{
        nome: 'Vasco',
    },
    visitante:{
        nome: 'Flamengo',
    }
};


export default class App extends React.Component {
    render(){
        return <Placar {...dados} tempo={92} />;        
    }
}