const Form = (props) => {
  const { getUserInput, greaterThanIndex, length, displayData } = props;
  return (
    <div className="main-container">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          getUserInput(e.target.number.value);
        }}
      >
        <label htmlFor="#number-input-dom">Paragraphs:</label>
        <input type="text" id="number-input-dom" name="number" min={0} />
        <button>Generate</button>
      </form>
      {(greaterThanIndex && <Error length={length} />) ||
        (!greaterThanIndex && <Paragraph displayData={displayData} />)}
    </div>
  );
};

const Paragraph = (props) => {
  const { displayData } = props;
  return <p className="paragraph-container">{displayData}</p>;
};

const Error = (props) => {
  const { length } = props;
  console.log(length);

  return (
    <p>Input must be greater than or equal to 0 and less than {length}.</p>
  );
};

export default Form;
