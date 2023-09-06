import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContanier from "../components/FormContainer";
import { saveShippingAddress } from "../slices/cartSlice";
import "./Shipping.css";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress?.phoneNumber || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, phoneNumber, country }));
    navigate("/payment");
    // navigate("/placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 />
      <FormContanier>
        <Form className="login" onSubmit={submitHandler}>
          <h1 className="signup">Shipping</h1>
          <Form.Group controlId="address">
            <div className="inputBox1">
              <input
                type="text"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></input>
              <span>Address</span>
            </div>
          </Form.Group>

          <Form.Group controlId="city">
            <div className="inputBox1">
              <input
                type="text"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></input>
              <span>City</span>
            </div>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <div className="inputBox1">
              <input
                type="text"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern=".{11}"
              ></input>
              <span>phoneNumber</span>
            </div>
          </Form.Group>

          <Form.Group className="py-2" controlId="country">
            <div className="inputBox1">
              <input
                type="text"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              ></input>
              <span>Country</span>
            </div>
          </Form.Group>

          <button className="enter" type="submit" variant="primary">
            Continue
          </button>
        </Form>
      </FormContanier>
    </div>
  );
};

export default ShippingScreen;
