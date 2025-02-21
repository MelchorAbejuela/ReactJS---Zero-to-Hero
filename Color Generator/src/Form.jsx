import { useState } from "react";
import Values from "values.js";

const Form = (props) => {
  const { setColorList } = props;
  const [colorInput, setColorInput] = useState("#000000");

  const handleChange = (e) => {
    const getColor = e.target.value;
    setColorInput(getColor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // return an array of object
    const getColorTypes = new Values(colorInput).all(10);
    setColorList(getColorTypes);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="#color">Color Generator</label>
      <input
        type="color"
        id="color"
        name="color"
        value={colorInput}
        onChange={handleChange}
      />
      <input
        type="text"
        className="input-hex"
        name="text"
        value={colorInput}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
