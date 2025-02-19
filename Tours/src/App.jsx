import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchFunc();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <h2 className="main-container-title">Our Tours</h2>
      <Tours data={data} setData={setData} />
    </div>
  );
};

export default App;
