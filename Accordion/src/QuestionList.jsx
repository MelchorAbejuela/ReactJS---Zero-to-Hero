import SingleQuestion from "./SingleQuestion";

const QuestionList = (props) => {
  const { title, info, isSelected, toggleInfo } = props;

  return (
    <SingleQuestion
      title={title}
      info={info}
      isSelected={isSelected}
      toggleInfo={toggleInfo}
    />
  );
};

export default QuestionList;
