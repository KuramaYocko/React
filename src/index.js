import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ToDoList from './ToDoList';
import {Router ,Route,IndexRoute, browserHistory } from 'react-router'


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={ToDoList}/>
		</Route>		
	</Router>,  
  document.getElementById('root')
);
