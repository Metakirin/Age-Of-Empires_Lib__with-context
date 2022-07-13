import loading from "./Loading.gif";
import style from "./style.scss";
const Loading = () => (
  <div className="loading__div">
    <img src={loading} alt="loading" style={{ width: "200px" }} />
  </div>
);

export default Loading;
