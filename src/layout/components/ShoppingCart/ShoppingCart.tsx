import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <Link to={"/cosul-meu"}>
      <i className="fa-solid fa-bag-shopping text-xl cursor-pointer"></i>
    </Link>
  );
};

export default ShoppingCart;
