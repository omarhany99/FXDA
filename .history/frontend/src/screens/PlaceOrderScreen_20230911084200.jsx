import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import Loader from "../components/Loader";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
import "./PlaceOrder.css";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();
  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();

      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row className="my-4">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.phoneNumber},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item._id}`}>{item.name}</Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && (
                  <Message variant="danger">{error.data.message}</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  <svg
                    version="1.1"
                    id="_x32_"
                    width="30px"
                    height="30px"
                    viewBox="0 0 512 512"
                    fill="#c673d9"
                    transform="rotate(-35)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <polygon
                          class="st0"
                          points="154.219,205.188 166.219,335.031 110.922,405.563 96.406,296.563"
                        ></polygon>
                        <polygon
                          class="st0"
                          points="357.781,205.188 345.766,335.031 401.063,405.563 415.594,296.563"
                        ></polygon>
                        <path
                          class="st0"
                          d="M323.813,62.219C305.125,23.328,275.656,0,256,0s-49.125,23.344-67.813,62.219H323.813z"
                        ></path>
                        <path
                          class="st0"
                          d="M331.328,80.469H180.672c-6.641,19.156-10.594,41.094-10.047,65.188 c1.609,69.063,18.047,190.984,18.047,190.984l122.641-0.016l12,0.016c0,0,16.453-121.938,18.031-190.984 C341.922,121.563,337.969,99.609,331.328,80.469z M256,231.031c-23.578,0-42.688-19.094-42.688-42.672s19.125-42.672,42.688-42.672 s42.672,19.094,42.656,42.672C298.672,211.938,279.563,231.031,256,231.031z"
                        ></path>
                        <path
                          class="st0"
                          d="M429.516,512c-6.109-17.594-22.859-30.219-42.531-30.219c-6.297,0-12.297,1.281-17.766,3.625 c-1.875-20.578-19.188-36.688-40.25-36.688c-3.047,0-6,0.328-8.844,0.969c0.031-0.563,0.031-1.125,0.031-1.688 c0-15.531-12.594-28.125-28.125-28.125c-4.031,0-7.875,0.844-11.344,2.375c-9.734-17.219-12.563-62.156-12.563-62.156h-25.5 c0,0-3.266,49.344-14.813,65.688c-2.688-1.094-5.656-1.688-8.75-1.688c-13.016,0-23.563,10.547-23.563,23.563 c0,0.984,0.063,1.953,0.188,2.906c-3.719-1.203-3.281-1.844-7.406-1.844c-16.484,0-30.531,10.406-35.938,25 c-6.047-2.516-12.672-3.906-19.625-3.906c-25.156,0-46.063,18.219-50.234,42.188H429.516z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span>Place Order</span>
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {isLoading && <Loader />}
    </>
  );
};

export default PlaceOrderScreen;
