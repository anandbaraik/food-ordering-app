import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../API/fakeFetch";
const MenuContext = createContext({
  productList: [],
  cartList: [],
  addToCart: () => {}
});

export const MenuContextProvider = ({ children }) => {
  const URL = "https://example.com/api/menu";
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList((list) => [...list, { ...product, showBtns: false }]);
  };

  const getProducts = async () => {
    try {
      const {
        data: { menu }
      } = await fakeFetch(URL);
      if (menu) {
        setProductList(menu);
      }
    } catch ({ status, message }) {
      console.error(`${status} :  ${message}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <MenuContext.Provider
      value={{
        productList,
        cartList,
        addToCart
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
