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
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {" "}
          {error?.data?.message || error.error}{" "}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            {/* <ListGroup variant="flush"> */}
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            {/* <h1>{product.name}</h1> */}
          </Col>
        </Row>
      )}
    </>
  );
};

export default reviewScreen;
