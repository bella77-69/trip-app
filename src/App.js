import './App.scss';
import Error404  from './components/Error404'
import Nav from './components/Nav'
import { AddTrip } from './components/trips/AddTrip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   <AddTrip />
      </header>
    </div>
  );
}

export default App;
