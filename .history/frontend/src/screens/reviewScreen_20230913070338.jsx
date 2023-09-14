import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import "./ProductScreen.css";
import { addToCart } from "../slices/cartSlice";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";

const ReviewScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <div>
          <Link to={`/product/${product._id}`}>
            <button>Go Back<</button></Link>
          <LinkContainer to={`/product/${product._id}`}>
            <h1>{product.name}</h1>
          </LinkContainer>
        </div>
      )}
    </>
  );
};

export default ReviewScreen;
