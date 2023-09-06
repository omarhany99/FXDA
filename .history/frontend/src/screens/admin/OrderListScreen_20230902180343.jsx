import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { FaTimes } from "react-icons/fa";
import { useGetOrderQuery } from "../../slices/ordersApiSlice";
import { Table, Button } from "react-bootstrap";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrderQuery;

  return (
    <>
    <h1>Orders</h1>
    <
    </>
  );
};

export default OrderListScreen;
