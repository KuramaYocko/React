import React, { Component } from 'react';



class TituloTarefa extends Component{
	render(){
		return(
			<div>			
				<h3>{this.props.texto}</h3>
			</div>
		);
	}

}

export default TituloTarefa;