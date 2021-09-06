import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Franchise from './components/Franchise/Franchise';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation />
			<ScrollToTop>
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
						<Franchise />
					</Route>
					<Route path="/About">
						<div>About</div>
					</Route>
					<Route path="/Contact">
						<div>Contact</div>
					</Route>
				</Switch>
			</ScrollToTop>
			<Footer />
		</Router>
	);
}

export default App;
