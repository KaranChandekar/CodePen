import React from "react";
import Editor from "./Editor";

function App() {
  return (
    <React.Fragment>
      <div className="pane top-pane">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
