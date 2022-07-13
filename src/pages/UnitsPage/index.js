import { useContext } from "react";
import DataContext from "../../context/DataContext/DataContext";
import { Loading } from "../../components";

const UnitsPage = (props) => {
  const { path, history } = props;
  const handleRedirect = () => {
    history.push("/");
  };
  const { unitsData } = useContext(DataContext);
  // console.log(unitsData);

  return (
    <div>
      {unitsData.length ? (
        <>
          <h1>Units:</h1>
          <div>
            {props.render(unitsData, path)}
            <button onClick={handleRedirect}>Home</button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UnitsPage;
