import { NavLink } from "react-router-dom";
import { useMenuContext } from "..";
export default function Header() {
  const { cartList } = useMenuContext();
  const getStyle = ({ isActive }) => {
    return isActive ? "menu menu-active" : "menu";
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className={getStyle}>
          Home
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/menu" className={getStyle}>
          Menu
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/cart" className={getStyle}>
          Cart {cartList?.length > 0 && <span>({cartList?.length})</span>}
        </NavLink>{" "}
      </nav>
    </div>
  );
}
