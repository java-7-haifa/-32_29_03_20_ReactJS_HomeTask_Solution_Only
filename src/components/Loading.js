import React from "react";

export default () => {
  return (
    <div className="row mt-5 justify-content-center">
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
