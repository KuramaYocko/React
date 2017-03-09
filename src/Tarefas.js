import React, { Component } from 'react';
import ItemTarefa from './ItemTarefa';
import './Tarefas.css';


class Tarefas extends Component{

	renderTarefa(){
		return this.props.itens.map(iten => <ItemTarefa key={iten.id} descricao={iten.descricao} />)

	}

	render(){
		return(
			<ul className="ListaTrefa">
			{this.renderTarefa()}
				
			</ul>		
			
		);
	}

}

export default Tarefas;