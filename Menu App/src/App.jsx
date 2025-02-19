import { useState, useEffect } from "react";
import menu from "./data";
import Menu from "./Menu";
import Title from "./Title";

const App = () => {
  const [data, setData] = useState(menu);
  const [arrayOfCategory, setArrayOfCategory] = useState([]);

  useEffect(() => {
    const getCategory = () => {
      // use set method to make sure we'll get the unique category in the raw data
      const categorySet = new Set();
      // loop through the menu and get the category in menu (raw data)
      menu.forEach((data) => {
        categorySet.add(data.category);
      });
      // convert the set back into the array and adding "all" at first
      setArrayOfCategory(["all", ...categorySet]);
    };
    getCategory();
  }, []);

  // useEffect to see if arrayOfCategory is working
  // we another useEffect because we will not be able to see the arrayOfCategory
  // if we tried to log it in the first useEffect (above)
  // since it does not update right after
  // which is a normal behavior of useEffect
  useEffect(() => {
    console.log(arrayOfCategory);
  }, [arrayOfCategory]);

  // function to display menu based on a category clicked
  const filterItems = (category) => {
    if (category === "all") {
      setData(menu);
    } else {
      const filteredItems = menu.filter((item) => {
        return item.category === category;
      });
      setData(filteredItems);
    }
  };

  return (
    <>
      <Title />
      <Menu
        data={data}
        filterItems={filterItems}
        arrayOfCategory={arrayOfCategory}
      />
    </>
  );
};

export default App;
