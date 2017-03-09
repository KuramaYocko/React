import React, { Component } from 'react';
import Tarefas from './Tarefas';
import TituloTarefa from './TituloTarefa';
import './Card.css';


class Card extends Component{
	render(){
		return(			
			<div className="formCard">
				<TituloTarefa texto={this.props.titulo}/>
				<Tarefas itens={this.props.tarefas}/>
			</div>
		);
	}

}

export default Card;