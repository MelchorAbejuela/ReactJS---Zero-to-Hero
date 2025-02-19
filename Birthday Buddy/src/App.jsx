import data from "./data";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(data);
  const birthdayNumber = value.length;
  const withS = value.length > 1 ? "Birthdays" : "Birthday";
  const clearBirthday = () => {
    // console.log(value);
    setValue([]);
  };

  return (
    <div className="persons-container">
      <h2>
        {birthdayNumber} {withS} Today.
      </h2>
      <div className="birthday-body">
        {value.map((singleData) => {
          return (
            <PersonComponent
              image={singleData.image}
              name={singleData.name}
              key={singleData.id}
              age={singleData.age}
            />
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => {
          clearBirthday();
        }}
        className="clear-all-button"
      >
        Clear All
      </button>
    </div>
  );
};

const PersonComponent = (props) => {
  const { name, image, age } = props;
  return (
    <div className="single-person-div">
      <img src={image} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default App;
