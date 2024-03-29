import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { FaTimes } from "react-icons/fa";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";
import { Table, Button } from "react-bootstrap";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrderQuery;

  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
