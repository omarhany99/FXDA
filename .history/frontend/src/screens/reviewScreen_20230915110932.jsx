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
  const [reviews, setReviews] = useState([]);

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
      }).unwrap();
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
      <Rating value={product?.rating} text={`${product?.numReviews} reviews`} />
      <Row className="review">
        <Col md={6}>
          <h2>Reviews</h2>
          {product?.reviews.length === 0 && <Message>No Reviews</Message>}
          <ListGroup variant="flush">
            {product?.reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review?.rating} />
                <p>{review.comment}</p>
                <p>{review.createdAt.substring(0, 10)}</p>
              </ListGroup.Item>
            ))}

            <ListGroup.Item>
              <h2>Write a Customer Review</h2>

              {loadingProductReview && <Loader />}

              {userInfo ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group className="my-2" controlId="rating">
                    <Form.Label>Rating</Form.Label>

                    <div
                      // as="select"
                      // required
                      // value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      class="rating"
                    >
                      <input
                        value="5"
                        name="rating"
                        id="star5"
                        type="radio"
                      ></input>
                      <label for="star5"></label>
                      <input
                        value="4"
                        name="rating"
                        id="star4"
                        type="radio"
                      ></input>
                      <label for="star4"></label>
                      <input
                        value="3"
                        name="rating"
                        id="star3"
                        type="radio"
                      ></input>
                      <label for="star3"></label>
                      <input
                        value="2"
                        name="rating"
                        id="star2"
                        type="radio"
                      ></input>
                      <label for="star2"></label>
                      <input
                        value="1"
                        name="rating"
                        id="star1"
                        type="radio"
                      ></input>
                      <label for="star1"></label>
                    </div>
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
                  Please <Link to="/login">sign in</Link> to write a review
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
