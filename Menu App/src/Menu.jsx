import MenuItem from "./MenuItem";

const Menu = (props) => {
  const { data, arrayOfCategory, filterItems } = props;
  return (
    <>
      {/* loop through the arrayOfCategory to dynamically create a button */}
      <div className="button-container">
        {arrayOfCategory.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="all-menu-container">
        {data.map((menu) => {
          return <MenuItem key={menu.id} {...menu} />;
        })}
      </div>
    </>
  );
};

export default Menu;
