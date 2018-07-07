import '../../semantic/dist/semantic.min.css';
import './App.css';

import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import About from '../about/About';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import MyFooter from '../myfooter/MyFooter';
import MyHeader from '../myheader/MyHeader';
import Projects from '../projects/Projects';

const App = () => {
	return (
		<Router>
			<React.Fragment>
				<MyHeader />
				<Divider />
				<Route exact={true} path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/projects" component={Projects} />
				<MyFooter />
			</React.Fragment>
		</Router>
	);
}

export default App;