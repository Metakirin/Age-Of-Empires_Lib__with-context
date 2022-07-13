import React, { Component } from "react";
import NavigationBuilder from "./NavigationBuilder";

import "./style.scss";

class StartNavigation extends Component {
  state = {
    data: [
      {
        name: "Home",
        path: "/",
        id: "1",
      },
      {
        name: "Civilizations",
        path: "/civilizations",
        id: "2",
      },
      {
        name: "Units",
        path: "/units",
        id: "3",
      },
      {
        name: "Structures",
        path: "/structures",
        id: "4",
      },
      {
        name: "Technologies",
        path: "/technologies",
        id: "5",
      },
    ],
  };
  render() {
    const { data } = this.state;
    return <div className="startNav__div">{this.props.render(data)}</div>;
  }
}

StartNavigation.StartNavBuilder = NavigationBuilder;

export default StartNavigation;
