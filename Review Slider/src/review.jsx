import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./index.css";

const Review = (props) => {
  const { data, previous, next } = props;
  const { id, name, job, image, text } = data;
  return (
    <div className="single-review">
      <img src={image} />
      <h2>{name.toUpperCase()}</h2>
      <h3>{job}</h3>
      <p>{text}</p>

      <FaAngleLeft
        className="previous-button"
        onClick={() => {
          previous();
        }}
      >
        previous
      </FaAngleLeft>
      <FaAngleRight
        className="next-button"
        onClick={() => {
          next();
        }}
      >
        next
      </FaAngleRight>
    </div>
  );
};

export default Review;
