import React from "react";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

 

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <h1>{product.name} : Reviews</h1>
    </>
  );
};

export default ReviewScreen;
