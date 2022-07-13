import React from "react";
import context from "./DataContext";

const { Provider, Consumer } = context;

class DataContextProvider extends React.Component {
  state = {
    contextData: {
      civilizationsData: [],
      unitsData: [],
      structuresData: [],
      technologiesData: [],
    },
    fetching: false,
  };

  async getData() {
    const res = await fetch(this.props.url);
    const { [this.props.path.substr(1)]: contextData } = await res.json();
    const DataChange = (contextData) => {
      const path = this.props.path.substr(1);
      switch (path) {
        case "civilizations":
          return this.setState((prevState) => ({
            ...prevState,

            contextData: {
              ...prevState.contextData,
              civilizationsData: contextData,
              unitsData: [...prevState.contextData.unitsData],
              structuresData: [...prevState.contextData.structuresData],
              technologiesData: [...prevState.contextData.technologiesData],
              fetching: true,
            },
          }));

        case "units":
          return this.setState((prevState) => ({
            ...prevState,

            contextData: {
              ...prevState.contextData,
              unitsData: contextData,
              civilizationsData: [...prevState.contextData.civilizationsData],
              structuresData: [...prevState.contextData.structuresData],
              technologiesData: [...prevState.contextData.technologiesData],
              fetching: true,
            },
          }));

        case "structures":
          return this.setState((prevState) => ({
            ...prevState,

            contextData: {
              ...prevState.contextData,
              structuresData: contextData,
              unitsData: [...prevState.contextData.unitsData],
              civilizationsData: [...prevState.contextData.civilizationsData],
              technologiesData: [...prevState.contextData.technologiesData],
              fetching: true,
            },
          }));

        case "technologies":
          return this.setState((prevState) => ({
            ...prevState,

            contextData: {
              ...prevState.contextData,
              technologiesData: contextData,
              unitsData: [...prevState.contextData.unitsData],
              structuresData: [...prevState.contextData.structuresData],
              civilizationsData: [...prevState.contextData.civilizationsData],
              fetching: true,
            },
          }));

        default:
          break;
      }
    };

    DataChange(contextData);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { contextData } = this.state;
    const { children } = this.props;
    console.log(contextData);

    return <Provider value={contextData}>{children}</Provider>;
  }
}

export { DataContextProvider, Consumer };
