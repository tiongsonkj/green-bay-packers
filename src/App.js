import './App.css';

// TODO: can i cheange the import file names to index? 
// that way i dont have to say their file name twice
import Bio from './sections/Bio/Bio';
import PlayerStats from './sections/PlayerStats/PlayerStats';
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
