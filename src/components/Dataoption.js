import React, { useState, useEffect } from "react";
import "./Option2.css";

const Dataoption = (props) => {
  const [peakarray, setpeakarray] = useState([]);

  useEffect(() => {
    var dataarray = [];
    if (props.values.x) {
      var n = props.values.x.length;
      var n1 = props.values.time_of_occurances.length;
      var i = 0,
        j = 0;
      dataarray = [];
      while (i < n && j < n1) {
        if (props.values.time_of_occurances[j] == props.values.x[i]) {
          dataarray.push({ x: props.values.x[i], y: props.values.y[i] });
          i += 1;
          j += 1;
        } else {
          i += 1;
        }
      }

      setpeakarray(dataarray);
    }
  }, [props]);

  return (
    <div>
      <table className="table">
        <tr>
          <th> Flare occurrence time</th> <th>Count/s</th>
        </tr>

        {props.values.time_of_occurances ? (
          peakarray.map((ele, idx) => (
            <>
              <tr>
                <td>{ele.x}</td>
                <td>{ele.y}</td>
              </tr>{" "}
            </>
          ))
        ) : (
          <li>Nothing to display</li>
        )}
      </table>
    </div>
  );
};

export default Dataoption;
