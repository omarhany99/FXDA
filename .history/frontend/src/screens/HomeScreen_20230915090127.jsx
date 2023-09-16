import { Row, Col, Container, Card } from "react-bootstrap";
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
      <Card className="cardbox33 d-flex justify-content-evenly">
        <div className="social socialIcon d-flex justify-content-evenly">
          <a href="https://www.facebook.com/profile.php?id=100085231024026&mibextid=ZbWKwL">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://instagram.com/fox.demando?igshid=OGQ5ZDc2ODk2ZA==">
            <FaInstagram></FaInstagram>
          </a>
          <a href="">
            <FaTiktok></FaTiktok>
          </a>
          <a href="">
            <FaTwitter></FaTwitter>
          </a>
        </div>
        <p className="p1">
          About FOX DEMANDO At FOX DEMANDO, we are passionate about creating
          high-quality, stylish t-shirts that empower individuals to express
          their unique personalities. As a brand, we strive to deliver
          exceptional designs that capture the essence of modern fashion trends
          while maintaining a timeless appeal. Quality Craftsmanship We believe
          that a great t-shirt starts with the finest materials and impeccable
          craftsmanship. That's why we meticulously source the softest fabrics
          and work with skilled artisans to ensure that every stitch is perfect.
          Our commitment to quality means that our t-shirts are not only
          comfortable to wear but also built to last.
        </p>
      </Card>
    </>
  );
};

export default HomeScreen;
