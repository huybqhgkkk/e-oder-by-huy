import { lazy } from "react";
const ProductQuantityToggler = lazy(
  () => import("../shopping-interactivity/ProductQuantityToggler")
);
const AddToCartButton = lazy(
  () => import("../shopping-interactivity/AddToCartButton")
);
const ProductWishlistToggler = lazy(
  () => import("../shopping-interactivity/ProductWishlistToggler")
);

const QuantityInteraction = ({ dish }) => {
  return (
    <div className="mb-8 flex items-center gap-2">
      <AddToCartButton dish={dish} className="w-fit" />
      <ProductQuantityToggler dish={dish} size="medium" />
      <ProductWishlistToggler dish={dish} size={30} />
    </div>
  );
};

export default QuantityInteraction;
