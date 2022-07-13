import React from "react";
import { Loading } from "../components";
import { AdditionalNavigation } from "../components";

const withRequestedAddInfo = (Component, url) =>
  class extends React.Component {
    state = {
      data: null,
      fetching: false,
    };

    async getData() {
      const res = await fetch(`${url}${this.props.match.params.id}`);
      const data = await res.json();
      this.setState({
        data: data,
        fetching: true,
      });
    }

    componentDidMount() {
      this.getData();
    }

    render() {
      const { data, fetching } = this.state;
      const { history } = this.props;
      console.log(data, url, Component);

      return fetching ? (
        Boolean(data) && (
          <Component
            data={data}
            history={history}
            render={(data) => (
              <AdditionalNavigation>
                <AdditionalNavigation.AddNavBuilder data={data} />
              </AdditionalNavigation>
            )}
          />
        )
      ) : (
        <Loading />
      );
    }
  };

export default withRequestedAddInfo;
