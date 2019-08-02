import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//boilerplate page that appends APP component (which is main component) to the pre-declared root node on the public/html page

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
