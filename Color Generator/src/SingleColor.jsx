import Values from "values.js";

const SingleColor = (props) => {
  const { rgb, weight, copyToClipboard } = props;

  // sum the value of rgb to know if its dark or light
  const rgbTotal = rgb[0] + rgb[1] + rgb[2];

  // set the font color dynamically
  // if above 400, means the background if ligher and we need a darker font
  const fontColor = rgbTotal >= 400 ? "#000000" : "#ffffff";

  // turn the rgb value into hex value using Values.JS
  const hexValue = new Values(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);

  return (
    <div
      className="color-container"
      style={{ backgroundColor: `#${hexValue.hex}` }}
    >
      <p className="color-percent" style={{ color: `${fontColor}` }}>
        {weight}%
      </p>
      <p
        className="color-itself"
        style={{ color: `${fontColor}`, border: `1px solid ${fontColor}` }}
        onClick={() => {
          copyToClipboard(`#${hexValue.hex}`);
        }}
      >
        #{hexValue.hex}
      </p>
    </div>
  );
};

export default SingleColor;
