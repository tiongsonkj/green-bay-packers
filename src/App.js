import Bio from './sections/Bio';
import PlayerStats from './sections/PlayerStats';
import Jumbotron from './components/Jumbotron';

function App() {
	return (
		<div className="App">
			<Jumbotron />
			<Bio />
			<PlayerStats />
		</div>
  	);
}

export default App;
