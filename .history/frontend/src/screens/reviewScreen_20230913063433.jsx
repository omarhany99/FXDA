import React from "react";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";

import Loader from "../components/Loader";
import Message from "../components/Message";
import "./ProductScreen.css";
import { addToCart } from "../slices/cartSlice";
import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
import Rating from "./Rating";
const ReviewScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Link to={`/product/${product._id}`} className="btn btn-light my-3">
        Go Back
      </Link>
      <Link to={`/product/${product._id}`}>
        <h1>{product.name} : Reviews</h1>
      </Link>

      <Link to={`/product/${product._id}`}>
        <Card.Title className="product-title" as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
    </>
  );
};

export default ReviewScreen;
