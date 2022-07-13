import { NavLink } from "react-router-dom";

const CivilizationNavBuilder = ({ data }) => {
  const {
    army_type,
    team_bonus,
    civilization_bonus,
    unique_unit,
    unique_tech,
  } = data;

  return (
    <>
      {Boolean(data) && (
        <div>
          {army_type && (
            <p>
              <span>Type of army: </span>
              {army_type}
            </p>
          )}

          {team_bonus && (
            <p>
              <span>Team bonus: </span>
              {team_bonus}
            </p>
          )}

          {civilization_bonus && (
            <div>
              <p>Civilization Bonus: </p>
              <ul>
                {civilization_bonus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {unique_unit && Boolean(unique_unit.length) && (
            <div>
              {unique_unit.map((item) => {
                const url = item.substr(55);
                return (
                  <NavLink key={url} to={`/units/${url}`}>
                    <button>View unique unit:</button>
                  </NavLink>
                );
              })}
            </div>
          )}

          {unique_tech && Boolean(unique_tech.length) && (
            <div>
              {unique_tech.map((item) => {
                const url = item.substr(61);
                return (
                  <NavLink key={url} to={`/technologies/${url}`}>
                    <button>View unique technology:</button>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CivilizationNavBuilder;
