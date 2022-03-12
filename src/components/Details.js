import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
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
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="Details"
          role="tabpanel"
          aria-labelledby="Details-tab"
        >
          Details of the given input
        </div>
        <div
          class="tab-pane fade"
          id="Flares"
          role="tabpanel"
          aria-labelledby="Flares-tab"
        >
          More about flares
        </div>
        <div
          class="tab-pane fade"
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
