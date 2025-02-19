const MenuItem = ({ img, title, price, desc }) => {
  return (
    <div className="single-menu">
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <h3 className="menu-price">{price}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default MenuItem;
