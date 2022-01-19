import React from "react";
import { FormToGetData } from "./FormToGetData";

export default function App() {
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-5 d-flex align-content-center flex-wrap">
          <FormToGetData />
        </div>
      </div>
    </div>
  );
}
