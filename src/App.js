import './App.css';
import Capsule from './Capsule';
import Launch from './Launch';
import Menu from './Menu';
import spacexLogo from './spacex-logo.jpg';

function App() {
  return (
    <div className="App">
      <img id="logo" src={spacexLogo} alt={"spacexLogo"}/> 
        <h1>SpaceX Project</h1>
        
        <Capsule />
        <Launch />
        <Menu />
    </div>
  );
}
export default App;
