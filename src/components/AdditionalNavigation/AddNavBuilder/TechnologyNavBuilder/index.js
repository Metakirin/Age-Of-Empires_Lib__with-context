import { NavLink } from "react-router-dom";

const TechnologyNavBuilder = ({ data }) => {
  const { develops_in, applies_to } = data;

  return (
    <>
      {Boolean(data) && (
        <div>
          {develops_in && (
            <div>
              <NavLink to={`/structures/${develops_in.substr(60)}`}>
                <button>View where develops in:</button>
              </NavLink>
            </div>
          )}

          {applies_to && Boolean(applies_to.length) && (
            <div>
              {applies_to.map((item) => {
                if (item.substr(50, 4) === "unit") {
                  const url = item.substr(55);
                  return (
                    <NavLink key={url} to={`/units/${url}`}>
                      <button>View which unit applies to:</button>
                    </NavLink>
                  );
                } else {
                  const url = item.substr(63);
                  return (
                    <NavLink key={url} to={`/civilizations/${url}`}>
                      <button>View what civilization applies to:</button>
                    </NavLink>
                  );
                }
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TechnologyNavBuilder;
