import { LinkContainer } from "react-router-bootstrap";

import { Table, Button, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetProductsQuery } from "../../slices/ordersApiSlice";

const ProductListScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const deleteHandler = () => {
    console.log("delete");
  };

  return (
    <>
      <Row>
        <Col>
          <h1>ProductsList</h1>
        </Col>
        <Col>
          <Button className="btn-sm m-3">
            <FaPlus /> Create Product
          </Button>
        </Col>
      </Row>
      {isLoading ? (<Loader/>) : error ? (<Message variant='danger'>{error.message}</Message>) : (
        
      )}
    </>
  );
};

export default ProductListScreen;
