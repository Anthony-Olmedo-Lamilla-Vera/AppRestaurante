import React from "react";
import Spinner from "react-bootstrap/Spinner";
function Loading() {
  return (
    <div className="Loading-comp">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>{" "}
    </div>
  );
}

export default Loading;
