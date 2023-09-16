import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import { useGetTopProductsMutation } from "../slices/productsApiSlice";

const Slider = () => {
  const { data: products, error, isLoading } = useGetTopProductsMutation();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((products) => (
        <Carousel.Item key={products._id}>
            <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name}
            </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
