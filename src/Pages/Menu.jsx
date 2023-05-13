import { useMenuContext } from "..";
import { ProductCard } from "../Components/ProductCard";

export default function Menu() {
  const { productList } = useMenuContext();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {productList?.map((product) => {
        return <ProductCard key={product.id} {...product} showBtns />;
      })}
    </div>
  );
}
