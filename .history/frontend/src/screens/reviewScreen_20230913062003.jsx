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
      <h1>{product.name}</h1>
    </>
  );
};

export default ReviewScreen;
