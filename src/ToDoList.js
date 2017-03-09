import React, { Component } from 'react';
import Card from './Card';


class ToDoList extends Component{
	state={
		todos:[]
	}

	componentDidMount(){
		fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
		.then(response => response.json())
		.then(response => this.setState({
			todos : response
		}));

	}

	renderCards(){
		return this.state.todos.map(todo => <Card  titulo={todo.titulo} tarefas={todo.itens} key={todo.id}/>)
	}



	render(){
		return(
			<div id="todolist">
				{this.renderCards()}			
			</div>
		);
	}

}

export default ToDoList;