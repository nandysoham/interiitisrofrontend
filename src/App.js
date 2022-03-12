import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

      <div className="container" style={{
          height:"80vh",
          width:"80vw"
      }}>
        <Graph></Graph>    

      </div>
      <div className="container">

      </div>

                
    </div>

  );
}

export default App;
