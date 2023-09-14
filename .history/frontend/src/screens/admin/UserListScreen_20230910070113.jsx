import { LinkContainer } from "react-router-bootstrap";

import { Table, Button } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetUsersQuery } from "../../slices/usersApiSlice";

const OrderListScreen = () => {
  const { data: orders, refetch, isLoading, error } = useGetUsersQuery();

  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>

                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: "blue" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>

                <td>
                  <LinkContainer
                    to={`/admin/user/${user._id}`}
                    style={{ marginRight: "10px" }}
                  >
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
