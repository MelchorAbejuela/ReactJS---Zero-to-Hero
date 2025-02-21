import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorList = (props) => {
  // array object (color)
  const { colorList, toastEmitterSuccess, toastEmitterFailed } = props;

  // clipboard function
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      toastEmitterSuccess();
    } catch (error) {
      toastEmitterFailed();
    }
  }

  return colorList.map((color) => {
    return (
      <SingleColor
        key={uuidv4()}
        {...color}
        copyToClipboard={copyToClipboard}
      />
    );
  });
};

export default ColorList;
