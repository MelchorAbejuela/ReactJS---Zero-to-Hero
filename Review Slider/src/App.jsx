import { useState } from "react";
import rawData from "./data";
import Review from "./review";

const App = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(rawData[index]);

  const previousFunc = () => {
    console.log("previous");
    setIndex((prevIndex) => {
      // if index is first value (the 0) then it should display the last value
      const newIndex = prevIndex === 0 ? rawData.length - 1 : prevIndex - 1;
      setData(rawData[newIndex]);
      return newIndex;
    });
  };

  const nextFunc = () => {
    console.log("next");
    setIndex((prevIndex) => {
      // if index is max length (last value) then it should restart to 0
      const newIndex = prevIndex === rawData.length - 1 ? 0 : prevIndex + 1;
      setData(rawData[newIndex]);
      return newIndex;
    });
  };

  return <Review data={data} previous={previousFunc} next={nextFunc} />;
};
export default App;
