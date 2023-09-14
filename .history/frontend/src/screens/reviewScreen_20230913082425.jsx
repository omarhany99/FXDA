import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import "./ProductScreen.css";
import { addToCart } from "../slices/cartSlice";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";

const ReviewScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoadinng: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwarp();
      refetch();
      toast.success("Review created successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

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
          <Link to={`/product/${product._id}`} className="btn btn-light my-3">
            Go Back
          </Link>

          <h1>{product.name}: Reviews</h1>
        </div>
      )}
      <Row className="review">
        <Col md={6}>
          <h2>Reviews</h2>
          {product.reviews.lenght == 0 && <Message>NoReviews</Message>}
          <ListGroup variant="flush">
            {product.reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.comment}</p>
                <p>{review.createtAt.substring(0, 10)}</p>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <h2>Write a Customer Review</h2>

              {loadingProductReview && <Loader />}

              {userInfo ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group className="my-2" crontrolId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="1">1 - star</option>
                      <option value="2">2 - star</option>
                      <option value="3">3 - star</option>
                      <option value="4">4 - star</option>
                      <option value="5">5 - star</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="my-2" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      row="3"
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    disabled={loadingProductReview}
                    type="submit"
                    variant="primary"
                  >
                    Submit
                  </Button>
                </Form>
              ) : (
                <Message>
                  <Link to="/login">Sign In</Link>To write a review
                </Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ReviewScreen;
