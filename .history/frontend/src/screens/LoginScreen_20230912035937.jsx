import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import "./LoginScreen.css";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientid =
  "470304396895-bjp3fqhe07f787tnqg2t33jjaq3peqjq.apps.googleusercontent.com";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

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
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // function handleCallbackResponse(response) {
  //   console.log("JWT ID TOKEN" + response.credential);
  //   var userObject = jwt_decode(response.credential);
  // }

  // useEffect(() => {
  //   /* global google*/
  //   google.accounts.id.initialize({
  //     client_Id:
  //       "470304396895-bjp3fqhe07f787tnqg2t33jjaq3peqjq.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     thee: "outline",
  //     size: "large",
  //   });
  // }, []);

  const [flag, setFlag] = useState(false);
  const [name, setName] = useState();

  const onSuccess = (res) => {
    setName(res.profileObj["name"]);
    console.log("Succes", res.profileObj);
    setFlag(true);
  };

  const onFailure = (res) => {
    console.log("Failed", res);
  };

  return (
    <>
      {isLoading && <Loader />}
      <FormContainer>
        <Form className="login" onSubmit={submitHandler}>
          <h1 className="signup">Sign In</h1>
          <Form.Group controlId="email">
            <div className="inputBox1">
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
            <div className="inputBox1">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              ></input>
              <span>Password</span>
            </div>
          </Form.Group>

          <button
            className="enter"
            disabled={isLoading}
            type="submit"
            variant="primary"
          >
            Lets go!
          </button>

          <GoogleLogin
            clientId={clientid}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText={"Sign with google"}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />

          <Row className="register">
            <Col>
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
