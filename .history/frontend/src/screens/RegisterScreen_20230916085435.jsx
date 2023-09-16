import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import "./Register.css";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <FormContainer>
        <Form className="registerscreen" onSubmit={submitHandler}>
          <h1 className="signup1">Register</h1>
          <Form.Group controlId="name">
            <div className="inputBox2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required="required"
              ></input>
              <span>Username</span>
            </div>
          </Form.Group>

          <Form.Group controlId="email">
            <div className="inputBox2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              ></input>
              <span>Email</span>
            </div>
          </Form.Group>

          <Form.Group controlId="password">
            <div className="inputBox2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
                // pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}"
                pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])"
                title="Password must include at least one capital letter and number"
              ></input>
              <span>Password</span>
              <label style={{ fontSize: "10px" }}>
                Password must include at least one capital letter and
              </label>
            </div>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <div className="inputBoxx">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required="required"
              ></input>
              <span>Confirm password</span>
            </div>
          </Form.Group>

          <button
            className="enter2"
            disabled={isLoading}
            type="submit"
            variant="primary"
          >
            Register
          </button>

          <Row className="registerlink">
            <Col>
              Already have an account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Login
              </Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
      {isLoading && <Loader />}
    </>
  );
};

export default RegisterScreen;
