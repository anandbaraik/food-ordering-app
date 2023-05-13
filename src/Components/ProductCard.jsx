import { Link } from "react-router-dom";
import { useMenuContext } from "..";

export function ProductCard(product) {
  const {
    id,
    name,
    description,
    price,
    image,
    delivery_time,
    showBtns
  } = product;
  const { addToCart, cartList } = useMenuContext();
  return (
    <div
      key={id}
      style={{
        maxWidth: "18rem",
        padding: "1rem",
        margin: "0.5rem",
        border: "0.1rem solid"
      }}
    >
      <img
        src={image}
        style={{ width: "100%", height: "50%", objectFit: "contain" }}
        alt={name}
      />
      <p>Name : {name}</p>
      <p>Description : {description}</p>
      <p>Price : {price}</p>
      <p>Delivery time : {delivery_time}</p>
      {showBtns && (
        <>
          {cartList?.find((p) => p.id === id) ? (
            <button disabled={true}>Added to cart</button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to cart</button>
          )}
        </>
      )}
    </div>
  );
}
