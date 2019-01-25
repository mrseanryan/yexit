import * as React from "react";

import { MonacoLoader } from "./MonacoLoader";

export class App extends React.Component<undefined, undefined> {
  componentDidMount() {
    MonacoLoader.load();
  }

  render() {
    return (
      <div id="container" style={{ height: "100%" }}>
        <div id="loader" className="wrapper" />
      </div>
    );
  }
}
