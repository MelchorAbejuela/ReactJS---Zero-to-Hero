import { FaAnglesRight } from "react-icons/fa6";

const Career = (props) => {
  const { company, dates, duties, id, title } = props;
  return (
    <div className="single-career">
      <h1>{title}</h1>
      <h2>{company}</h2>
      <h3>{dates}</h3>
      {duties.map((duty, index) => {
        return (
          <div className="duty-div" key={index}>
            <FaAnglesRight className="fa-angles-right" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Career;
