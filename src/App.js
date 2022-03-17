import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import Details from "./components/Details";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div
        className="container"
        style={{
          height: "80vh",
          width: "80vw",
        }}
      >
        <Graph></Graph>
      </div>
      <div className="container">
        <div className="container mt-4">
          <h4 className="display-6 text-center mb-4">
            <i className="fab fa-react" /> Upload Your File
          </h4>
        </div>
        <FileUpload />
      </div>
      <div
        className="container"
        style={{
          height: "80vh",
          width: "80vw",
        }}
      >
        <Details></Details>
      </div>
      <div className="footer">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p className="copyright text-muted">Team ABCD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
