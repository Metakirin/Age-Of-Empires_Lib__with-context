import { useContext } from "react";
import DataContext from "../../context/DataContext/DataContext";
import { Loading } from "../../components";

const StructuresPage = (props) => {
  const { path, history } = props;
  const handleRedirect = () => {
    history.push("/");
  };
  const { structuresData } = useContext(DataContext);
  // console.log(structuresData);

  return (
    <div>
      {structuresData.length ? (
        <>
          <h1>Structures:</h1>
          <div>
            {props.render(structuresData, path)}
            <button onClick={handleRedirect}>Home</button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default StructuresPage;
