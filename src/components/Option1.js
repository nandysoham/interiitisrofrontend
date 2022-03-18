import "bootstrap/dist/css/bootstrap.min.css";
import FullGraph from "./FullGraph";

const Option1 = (props) => {
  return (
    <div className="container">
      <div className="about-text">
        <h2>Curve Data Analysis</h2>
        <p>Detailed Analysis of the plotted curve</p>
        <p>Time of Flare Occurances</p>
        <FullGraph values = {props.values} data = {props.values.time_of_occurances} details = {{"type" : "time_of_occurances", "legend" : "Time of flare occurances"}}/>
        <p>Time of Flare rise</p>
        <FullGraph values = {props.values} data = {props.values.left} details = {{"type" : "time_of_rise", "legend" : "Time of Rise"}}/>
        <p>Time of Flare decay</p>
        <FullGraph values = {props.values} data = {props.values.right} details = {{"type" : "time_of_decay", "legend" : "Time of Decay"}}/>
        

      </div>
    </div>
  );
};

export default Option1;
