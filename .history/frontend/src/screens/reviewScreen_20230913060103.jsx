import React from "react";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
const reviewScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default reviewScreen;
