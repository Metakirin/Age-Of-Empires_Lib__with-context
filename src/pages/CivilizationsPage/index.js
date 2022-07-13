import { useContext } from "react";
import DataContext from "../../context/DataContext/DataContext";
import { Loading } from "../../components";

const CivilizationsPage = (props) => {
  const { path, history } = props;
  const handleRedirect = () => {
    history.push("/");
  };

  const { civilizationsData } = useContext(DataContext);
  // console.log(civilizationsData);

  return (
    <div>
      {civilizationsData.length ? (
        <>
          <h1>Civilizations:</h1>
          <div>
            {props.render(civilizationsData, path)}
            <button onClick={handleRedirect}>Home</button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CivilizationsPage;
