import React from "react";


const Details = () => {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="Details-tab"
            data-bs-toggle="tab"
            data-bs-target="#Details"
            type="button"
            role="tab"
            aria-controls="Details"
            aria-selected="true"
          >
            Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Flares-tab"
            data-bs-toggle="tab"
            data-bs-target="#Flares"
            type="button"
            role="tab"
            aria-controls="Flares"
            aria-selected="false"
          >
            Flares
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="References-tab"
            data-bs-toggle="tab"
            data-bs-target="#References"
            type="button"
            role="tab"
            aria-controls="References"
            aria-selected="false"
          >
            References
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="Details"
          role="tabpanel"
          aria-labelledby="Details-tab"
        >
          Details of the given input
        </div>
        <div
          className="tab-pane fade"
          id="Flares"
          role="tabpanel"
          aria-labelledby="Flares-tab"
        >
          More about flares
        </div>
        <div
          className="tab-pane fade"
          id="References"
          role="tabpanel"
          aria-labelledby="References-tab"
        >
          Reference and further reading
        </div>
      </div>
    </div>
  );
};

export default Details;
