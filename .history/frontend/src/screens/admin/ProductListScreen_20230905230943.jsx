import { LinkContainer } from "react-router-bootstrap";

import { Table, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetProductsQuery } from "../../slices/ordersApiSlice";

const ProductListScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  deleteHandler;
  return <>{Product.map(products)}</>;
};

export default ProductListScreen;
