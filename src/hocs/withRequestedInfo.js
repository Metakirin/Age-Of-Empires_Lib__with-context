import React from "react";
// import { Loading } from "../components";
import { AdditionalNavigation } from "../components";
import { DataContextProvider } from "../context/DataContext/DataContextProvider";
// import { Consumer as DataContextConsumer } from "../context/DataContext/DataContextProvider";

const withRequestedInfo = (Component, url) =>
  class extends React.Component {
    render() {
      const { location, history } = this.props;

      return (
        <DataContextProvider url={url} path={location.pathname}>
          <Component
            path={location.pathname}
            history={history}
            render={(data, path) => (
              <AdditionalNavigation>
                <AdditionalNavigation.StartNavBuilder data={data} path={path} />
              </AdditionalNavigation>
            )}
          />
        </DataContextProvider>
      );
    }
  };

export default withRequestedInfo;
