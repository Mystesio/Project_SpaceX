import './App.css';
import Capsule from './Capsule';
import Launch from './Launch';
import spacexLogo from './spacex-logo.jpg';

function App() {
  return (
    <div className="App">
      <img src={spacexLogo} alt={"spacexLogo"}/> 
        <h1>SpaceX Project</h1>
        
        <Capsule />
        <Launch />
    </div>
  );
}

export default App;
