import React, { Component } from 'react';

const style ={
	background:'white',
	padding:'8px 12px',
	outline:'none',
	boxShadow:'2px 3px 10px rgba(0, 0, 0, 0.2)',
	border: 'none',
	width:'100%'


};
class BarraPesquisa extends Component{
	render(){
		return(
			<form>
				<input type="search" placeholder={this.props.texto}

				style={style} />
			</form>
		);
	}
}
BarraPesquisa.propTypes={
	texto: React.PropTypes.string.isRequired

};

export default BarraPesquisa;