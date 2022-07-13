import { NavLink } from "react-router-dom";

const UnitNavBuilder = ({ data }) => {
  const {
    reload_time,
    attack_delay,
    movement_rate,
    range,
    attack,
    accuracy,
    attack_bonus,
    created_in,
  } = data;

  return (
    <>
      {Boolean(data) && (
        <div>
          {reload_time && (
            <p>
              <span>Reload time - </span>
              {reload_time}
            </p>
          )}

          {attack_delay && (
            <p>
              <span>Attack delay - </span>
              {attack_delay}
            </p>
          )}

          {movement_rate && (
            <p>
              <span>Movement rate - </span>
              {movement_rate}
            </p>
          )}

          {range && (
            <p>
              <span>Range - </span>
              {range}
            </p>
          )}

          {attack && (
            <p>
              <span>Attack - </span>
              {attack}
            </p>
          )}

          {accuracy && (
            <p>
              <span>Accuracy - </span>
              {accuracy}
            </p>
          )}

          {attack_bonus && Boolean(attack_bonus.length) && (
            <div>
              <p>Attack bonus from civilization: </p>
              <ul>
                {attack_bonus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {created_in && (
            <div>
              <NavLink to={`/structures/${created_in.substr(60)}`}>
                <button>View where created in:</button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UnitNavBuilder;
