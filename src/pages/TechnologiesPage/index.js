import { useContext } from "react";
import DataContext from "../../context/DataContext/DataContext";
import { Loading } from "../../components";

const TechnologiesPage = (props) => {
  const { path, history } = props;
  const handleRedirect = () => {
    history.push("/");
  };
  const { technologiesData } = useContext(DataContext);
  // console.log(technologiesData);

  return (
    <div>
      {technologiesData.length ? (
        <>
          <h1>Technologies:</h1>
          <div>
            {props.render(technologiesData, path)}
            <button onClick={handleRedirect}>Home</button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TechnologiesPage;
