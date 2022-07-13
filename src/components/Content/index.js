import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  StructuresPage,
  CivilizationsPage,
  UnitsPage,
  TechnologiesPage,
  AddInfoPage,
} from "../../pages";

import withRequestedInfo from "../../hocs/withRequestedInfo";
import withRequestedAddInfo from "../../hocs/withRequestedAddInfo";

import { DataContextProvider } from "../../context/DataContext/DataContextProvider";

const baseURL = "https://cors-anywhere.herokuapp.com/";

const Content = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <DataContextProvider>
      <Route
        exact
        path="/structures"
        component={withRequestedInfo(
          StructuresPage,
          `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/structures`
        )}
      />

      <Route
        exact
        path="/civilizations"
        component={withRequestedInfo(
          CivilizationsPage,
          `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`
        )}
      />
      <Route
        exact
        path="/units"
        component={withRequestedInfo(
          UnitsPage,
          `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/units`
        )}
      />
      <Route
        exact
        path="/technologies"
        component={withRequestedInfo(
          TechnologiesPage,
          `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/technologies`
        )}
      />
    </DataContextProvider>
    <Route
      path="/structures/:id"
      component={withRequestedAddInfo(
        AddInfoPage,
        `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/structure/`
      )}
    />
    <Route
      path="/civilizations/:id"
      component={withRequestedAddInfo(
        AddInfoPage,
        `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/`
      )}
    />
    <Route
      path="/units/:id"
      component={withRequestedAddInfo(
        AddInfoPage,
        `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/unit/`
      )}
    />
    <Route
      path="/technologies/:id"
      component={withRequestedAddInfo(
        AddInfoPage,
        `${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/technology/`
      )}
    />
  </Switch>
);

export default Content;
