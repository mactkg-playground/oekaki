import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <h1>oekaki app</h1>
  </React.StrictMode>,

  document.getElementById("root")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
