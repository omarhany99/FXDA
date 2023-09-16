import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import "./CartScreen.css";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    navigate("/shipping");
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        {" "}
        <Col md={8}>
          <h1>Shopping cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup className="my-3" variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price} LE</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                  LE) Items
                </h2>
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <div class="btn-container">
                  <button
                    disabled={cartItems.length === 0}
                    className="j"
                    onClick={checkOutHandler}
                    id="space-btn"
                    name="space-button"
                    type="submit"
                  >
                    <span>Proceed To CheckOut</span>
                    <div
                      style={{
                        position: "absolute",
                        left: "119.273px",
                        top: "18.0747px",
                        animationDelay: "3.37051s",
                        transform: "scale(0.196521)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "166.774px",
                        top: "47.4519px",
                        animationDelay: "3.03913s",
                        transform: "scale(0.33078)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "238.677px",
                        top: "19.6434px",
                        animationDelay: "3.85796s",
                        transform: "scale(1.29037)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "22.2022px",
                        top: "4.69534px",
                        animationDelay: "4.9415s",
                        transform: "scale(1.82231)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "206.74px",
                        top: "40.7685px",
                        animationDelay: "1.59195s",
                        transform: "scale(1.01375)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "241.531px",
                        top: "14.2516px",
                        animationDelay: "1.67616s",
                        transform: "scale(0.811597)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "14.754px",
                        top: "25.2924px",
                        animationDelay: "0.0348248s",
                        transform: "scale(0.102529)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "220.444px",
                        top: "43.9803px",
                        animationDelay: "1.5106s",
                        transform: "scale(0.16088)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "95.948px",
                        top: "54.8942px",
                        animationDelay: "3.18662s",
                        transform: "scale(1.7822)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "30.3484px",
                        top: "36.5984px",
                        animationDelay: "4.30868s",
                        transform: "scale(1.16326)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "184.622px",
                        top: "20.0923px",
                        animationDelay: "2.83829s",
                        transform: "scale(1.27781)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "142.1px",
                        top: "22.3542px",
                        animationDelay: "2.73988s",
                        transform: "scale(1.62715)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "145.079px",
                        top: "6.97553px",
                        animationDelay: "0.0408754s",
                        transform: "scale(0.468075)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "6.67886px",
                        top: "38.4849px",
                        animationDelay: "3.84019s",
                        transform: "scale(0.272217)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "201.17px",
                        top: "39.9168px",
                        animationDelay: "2.93587s",
                        transform: "scale(0.521258)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "224.215px",
                        top: "42.9903px",
                        animationDelay: "0.895495s",
                        transform: "scale(0.0458902)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "42.2308px",
                        top: "9.78383px",
                        animationDelay: "4.58407s",
                        transform: "scale(0.0422065)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "91.2734px",
                        top: "14.0408px",
                        animationDelay: "2.05927s",
                        transform: "scale(0.11997)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "35.6985px",
                        top: "52.6403px",
                        animationDelay: "3.07343s",
                        transform: "scale(0.672992)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "76.4191px",
                        top: "48.453px",
                        animationDelay: "2.35679s",
                        transform: "scale(1.46957)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "184.503px",
                        top: "4.18267px",
                        animationDelay: "1.43409s",
                        transform: "scale(0.606616)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "221.039px",
                        top: "54.2493px",
                        animationDelay: "2.92356s",
                        transform: "scale(0.638665)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "185.612px",
                        top: "44.3px",
                        animationDelay: "1.36401s",
                        transform: "scale(1.65012)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "154.027px",
                        top: "45.9848px",
                        animationDelay: "3.723s",
                        transform: "scale(1.4118)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "220.591px",
                        top: "4.95194px",
                        animationDelay: "0.363098s",
                        transform: "scale(0.52369)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "236.028px",
                        top: "11.1663px",
                        animationDelay: "3.67493s",
                        transform: "scale(0.956478)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "110.241px",
                        top: "20.2684px",
                        animationDelay: "2.94906s",
                        transform: "scale(1.2193)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "12.602px",
                        top: "19.8836px",
                        animationDelay: "4.072s",
                        transform: "scale(1.49026)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "30.0911px",
                        top: "37.9746px",
                        animationDelay: "1.02002s",
                        transform: "scale(1.41008)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "62.3096px",
                        top: "9.64604px",
                        animationDelay: "3.9445s",
                        transform: "scale(0.231214)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "44.7189px",
                        top: "32.4307px",
                        animationDelay: "4.78921s",
                        transform: "scale(0.359408)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "191.866px",
                        top: "27.151px",
                        animationDelay: "1.34451s",
                        transform: "scale(1.13484)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "47.6744px",
                        top: "3.00604px",
                        animationDelay: "1.04567s",
                        transform: "scale(0.682023)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "98.6225px",
                        top: "49.6115px",
                        animationDelay: "2.41384s",
                        transform: "scale(1.96254)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "57.4785px",
                        top: "29.6588px",
                        animationDelay: "3.3569s",
                        transform: "scale(1.53118)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "13.2213px",
                        top: "24.538px",
                        animationDelay: "1.69582s",
                        transform: "scale(1.6236)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "131.656px",
                        top: "31.1837px",
                        animationDelay: "1.29918s",
                        transform: "scale(1.84486)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "56.9067px",
                        top: "51.9904px",
                        animationDelay: "4.74375s",
                        transform: "scale(0.749788)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "82.8361px",
                        top: "54.3876px",
                        animationDelay: "1.28648s",
                        transform: "scale(0.566118)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "193.213px",
                        top: "43.9428px",
                        animationDelay: "0.390178s",
                        transform: "scale(1.411)",
                      }}
                      className="star"
                    ></div>
                    <div
                      style={{ animationDelay: "1.2122s" }}
                      className="shooting-star shooting-star-1"
                    ></div>
                    <div
                      style={{ animationDelay: "0.777895s" }}
                      className="shooting-star shooting-star-2"
                    ></div>
                    <div
                      style={{ animationDelay: "4.90483s" }}
                      className="shooting-star shooting-star-3"
                    ></div>
                    <div
                      style={{ animationDelay: "3.66012s" }}
                      className="shooting-star shooting-star-4"
                    ></div>
                  </button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
