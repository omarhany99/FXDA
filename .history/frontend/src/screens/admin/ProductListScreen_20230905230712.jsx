import { LinkContainer } from "react-router-bootstrap";

import { Table, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";

const ProductListScreen = () => {
  return <>
  {Product.map(())}
  </>;
};

export default ProductListScreen;
