import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationBuilder extends Component {
  render() {
    const data = this.props.data;

    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    );
  }
}
export default NavigationBuilder;
