import { useEffect, useState } from "react";
import Loading from "./Loading";
import CareerList from "./CareerList";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [index, setIndex] = useState(0);
  const [whatToDisplay, setWhatToDisplay] = useState([]);

  const [setOfCompany, setCompany] = useState([]);

  // fetch the data
  useEffect(() => {
    setTimeout(() => {
      const fetchFunc = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();

          // set the data array
          setData(data);

          // set the whatToDisplay using the current index
          setWhatToDisplay(data[index]);
        } catch (error) {
          console.log(error);
        }
        // set the loading state into false to stop the loading component
        setLoading(false);
      };
      fetchFunc();
    }, 2000);
  }, []);

  useEffect(() => {
    const getCategory = () => {
      const set = new Set();
      data.forEach((singleData) => {
        set.add(singleData.company);
      });
      setCompany([...set]);
    };
    getCategory();
  }, [data]);

  const updateWhatToDisplay = (buttonIndex) => {
    setWhatToDisplay(data[buttonIndex]);
  };

  // // log the data
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // // log the whatToDisplay
  // useEffect(() => {
  //   console.log(whatToDisplay);
  // }, [whatToDisplay]);

  // // log the set of company
  // useEffect(() => {
  //   console.log(setOfCompany);
  // }, [setOfCompany]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CareerList
      whatToDisplay={whatToDisplay}
      setOfCompany={setOfCompany}
      updateWhatToDisplay={updateWhatToDisplay}
    />
  );
};
export default App;
