import { NavLink } from "react-router-dom";

import style from "./style.scss";

const StartNavBuilder = (props) => {
  const { data, path } = props;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <NavLink to={`${path}/${item.id}`}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default StartNavBuilder;
