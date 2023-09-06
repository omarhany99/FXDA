import { LinkContainer } from "react-router-bootstrap";

import { Table, Button, Row,Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetProductsQuery } from "../../slices/ordersApiSlice";

const ProductListScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const deleteHandler
  return <></>;
};

export default ProductListScreen;
