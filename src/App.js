import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<div>Home</div>
				</Route>
				<Route path="/Home">
					<div>Home</div>
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
		</Router>
	);
}

export default App;
