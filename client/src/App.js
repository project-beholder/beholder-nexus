// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

/* Components */
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

/* Pages */
import Home from './pages/index.js';
import Assembly from './pages/assembly.js';
import GameLibrary from './pages/game-library.js';
import Help from './pages/help.js';

/* CSS */
import './css/universal.css';

// export const App = () => (
// 	<HashRouter>
// 		<Navbar />

// 		<Routes>
// 			<Route exact path='/' component={ <Home/> } />
// 		</Routes>

// 		<Footer />
// 	</HashRouter>
// )



export function App() {
    return (
		<Router>
			<Navbar />

			<Routes>
				<Route exact path='/' element={ <Home /> } />
				<Route path='/assembly' element={ <Assembly /> } />
				<Route path='/game-library' element={ <GameLibrary /> } />
				<Route path='/help' element={ <Help /> } />
			</Routes>

			<Footer />
		</Router>

    );
}