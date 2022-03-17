import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import Details from "./components/Details";
import FileUpload from "./components/FileUpload";

import React, { useState, useEffect } from 'react'




function App() {
  const [values, setvalues] = useState({})

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
        <Graph values = {values}></Graph>
      </div>
      <div className="container">
        <div className="container mt-4">
          <h4 className="display-6 text-center mb-4">
            <i className="fab fa-react" /> Upload Your File
          </h4>
          <FileUpload setvalues = {setvalues}/>
        </div>
        <Details></Details>
      </div>
    </div>
  );
}

export default App;
