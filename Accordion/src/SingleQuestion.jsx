const SingleQuestion = (props) => {
  const { title, info, isSelected, toggleInfo } = props;

  return (
    <div className="question">
      <div>
        <h2>{title}</h2>
        {/* If isSelected is true, the info will be displayed */}
        {isSelected && <p>{info}</p>}
      </div>
      {/* Button to toggle the info display
          If isSelected is true, show '-' symbol, otherwise show '+' symbol */}
      <button onClick={toggleInfo}>{isSelected ? "-" : "+"}</button>
    </div>
  );
};

export default SingleQuestion;
