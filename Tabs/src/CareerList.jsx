import Career from "./Career";

const CareerList = (props) => {
  const { whatToDisplay, setOfCompany, updateWhatToDisplay } = props;

  return (
    <div className="main-container">
      <div className="button-container">
        {setOfCompany.map((company, buttonIndex) => {
          return (
            <button
              type="button"
              key={company}
              onClick={() => {
                updateWhatToDisplay(buttonIndex);
              }}
            >
              {company}
            </button>
          );
        })}
      </div>
      <div>
        <Career {...whatToDisplay} />
      </div>
    </div>
  );
};

export default CareerList;
