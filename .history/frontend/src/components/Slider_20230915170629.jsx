import React from "react";
import { Link } from "react-router-dom";
import { CarouselImage } from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import { useGetTopProductsMutation } from "../slices/productsApiSlice";

const Slider = () => {
  const { data: products, error, isLoading } = useGetTopProductsMutation();

  return isLoading ? (
    <Loader/>
  ) <div></div>;
};

export default Slider;
