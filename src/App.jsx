import React, { Component } from "react";

import { Content, StartNavigation } from "./components";

export class App extends Component {
  render() {
    return (
      <>
        <StartNavigation
          render={(data) => <StartNavigation.StartNavBuilder data={data} />}
        />
        <Content />
      </>
    );
  }
}
