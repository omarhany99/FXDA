import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import "./home.css";
const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {" "}
          {error?.data?.message || error.error}{" "}
        </Message>
      ) : (
        <>
          <Row>
            {products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}

      <div className="social socialIcon d-flex justify-content-evenly">
        <a href="">
          <FaFacebook></FaFacebook>
        </a>
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a href="">
          <FaTiktok></FaTiktok>
        </a>
        <a href="">
          <FaTwitter></FaTwitter>
        </a>
      </div>
    </>
  );
};

export default HomeScreen;
