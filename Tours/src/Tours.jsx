import Tour from "./Tour";

const Tours = (props) => {
  const { data, setData } = props;

  const notInterested = (id) => {
    const newData = data.filter((singleData) => {
      return id !== singleData.id;
    });
    setData(newData);
  };

  return (
    <div className="all-tour">
      {data.map((singleData) => {
        return (
          <Tour
            key={singleData.id}
            id={singleData.id}
            image={singleData.image}
            info={singleData.info}
            name={singleData.name}
            price={singleData.price}
            notInterested={notInterested}
          />
        );
      })}
    </div>
  );
};

export default Tours;
