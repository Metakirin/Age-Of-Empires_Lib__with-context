const AddInfoPage = (props) => {
  const { data, history } = props;
  // console.log(data);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      {props.render(data)}
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default AddInfoPage;
