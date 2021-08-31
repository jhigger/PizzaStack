import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/Home">
					<Home />
				</Route>
				<Route path="/Menu">
					<div>Menu</div>
				</Route>
				<Route path="/Franchise">
					<div>Franchise</div>
				</Route>
				<Route path="/About">
					<div>About</div>
				</Route>
				<Route path="/Contact">
					<div>Contact</div>
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
