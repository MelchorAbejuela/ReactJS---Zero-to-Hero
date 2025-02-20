import { useEffect, useState } from "react";
// raw data
import text from "./data";
import Form from "./Form";

const App = () => {
  const [data, setData] = useState(text);

  const [index, setIndex] = useState(0);
  const [displayData, setDisplayData] = useState(data[index]);

  const [greaterThanIndex, setGreaterThanIndex] = useState(false);
  const [length, setLength] = useState(0);

  const getUserInput = (userInput) => {
    const userInputNumber = Number(userInput);
    console.log(typeof userInputNumber);

    if (userInputNumber >= data.length || userInputNumber < 0) {
      setGreaterThanIndex(true);
      setLength(data.length);
    } else {
      setGreaterThanIndex(false);
    }

    setDisplayData(() => {
      return data.map((p, index) => {
        if (userInputNumber === index) {
          console.log(true);
          return data[index];
        }
      });
    });
  };

  return (
    <Form
      getUserInput={getUserInput}
      greaterThanIndex={greaterThanIndex}
      length={length}
      displayData={displayData}
    />
  );
};

export default App;
