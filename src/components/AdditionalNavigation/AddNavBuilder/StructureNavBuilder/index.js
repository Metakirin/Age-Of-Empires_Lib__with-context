const StructureNavBuilder = ({ data }) => {
  const { special } = data;

  return (
    <>
      {Boolean(data) && (
        <div>
          <div>
            {special && (
              <div>
                <p>Special: </p>
                <ul>
                  {special.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StructureNavBuilder;
