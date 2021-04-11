// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
console.log(document.getElementById("root").outerHTML);
// <div id="root"><h1>test</h1><p>test</p></div>
