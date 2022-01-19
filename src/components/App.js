import React, { useEffect } from "react";
import { FormToGetData } from "./FormToGetData";
import styles from "./App.module.css";

export default function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#121212";
  }, []);

  return (
    <div className={styles.backgroundColor}>
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
    </div>
  );
}
