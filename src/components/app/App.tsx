import './App.css';
import '../../semantic/dist/semantic.min.css';

import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../about/About';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import Header from '../myheader/MyHeader';
import Projects from '../projects/Projects';

const App = () => {
	return (
		<Router>
			<React.Fragment>
				<Header />
				<Route exact={true} path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/projects" component={Projects} />
			</React.Fragment>
		</Router>
	);
}

export default App;