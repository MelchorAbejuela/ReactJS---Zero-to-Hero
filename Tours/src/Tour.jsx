import { useState } from "react";

const Tour = (props) => {
  const { id, image, info, name, price, notInterested } = props;
  const [isToggled, setToggle] = useState(false);

  const ReadMore = () => {
    return <p>{info}...</p>;
  };

  const ReadLess = () => {
    return <p>{info.substring(0, 250)}...</p>;
  };

  return (
    <div className="single-tour">
      <img src={image} alt={image} />
      <h2>{name}</h2>
      <p className="tour-price">${price}</p>
      <div>
        {isToggled ? ReadMore() : ReadLess()}
        <button
          className="readmore-readless"
          onClick={() => {
            setToggle(!isToggled);
          }}
        >
          {!isToggled ? "Read More" : "Read Less"}
        </button>
      </div>
      <button
        className="not-interested-button"
        onClick={() => {
          notInterested(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
