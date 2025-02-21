import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure you have imported the CSS for Toastify
import ColorList from "./ColorList";
import Form from "./Form";

const App = () => {
  const [colorList, setColorList] = useState([]);

  const toastEmitterSuccess = () => {
    toast.success("Hex value copied successfully!");
  };

  const toastEmitterFailed = () => {
    toast.error("Failed to copy Hex value.");
  };

  return (
    <div className="overall-container">
      <Form colorList={colorList} setColorList={setColorList} />
      <div className="all-color-container">
        {colorList.length !== 0 && (
          <ColorList
            colorList={colorList}
            toastEmitterSuccess={toastEmitterSuccess}
            toastEmitterFailed={toastEmitterFailed}
          />
        )}
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
