import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => 
	<Router>
		<div>
			<Navbar />
			<Route exact path="/" component={Main} />
		</div>
	</Router>;


export default App;
