import './App.css';

// TODO: can i cheange the import file names to index? 
// that way i dont have to say their file name twice
import Bio from './sections/Bio/Bio';
import PlayerStats from './sections/PlayerStats/PlayerStats';

function App() {

	return (
		<div className="App">
			<Bio />
			<PlayerStats />
		</div>
  	);
}

export default App;
