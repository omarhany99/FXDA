import { LinkContainer } from "react-router-bootstrap";

import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTelegramPlane, FaTimes } from "react-icons/fa";
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
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.message}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <td>ID</td>
              <td>NAME</td>
              <td>CATEGORY</td>
              <td>BRAND</td>
              <td></td>
            </thead>
            <tbody>
              {products.map((product) => {
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>;
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
