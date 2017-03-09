import React, { Component } from 'react';
import Checkbox from './Checkbox';


class ItemTarefa extends Component{
	render(){
		return(				
			<li>			
				<Checkbox /> {this.props.descricao}					  					
			</li>
			
		);
	}

}

export default ItemTarefa;