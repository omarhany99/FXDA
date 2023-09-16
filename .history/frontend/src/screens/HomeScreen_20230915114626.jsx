import { Row, Col, Container, Card } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";

import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import "./home.css";

import Paginate from "../components/Paginate";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  console.log(pageNumber);

  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
    keyword,
  });
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
            {data.products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
      <Card className="cardbox33 d-flex justify-content-evenly">
        <p className="p1">
          <strong>FOX DEMANDO </strong> At FOX DEMANDO, we are passionate about
          creating high-quality, stylish t-shirts that empower individuals to
          express their unique personalities. As a brand, we strive to deliver
          exceptional designs that capture the essence of modern fashion trends
          while maintaining a timeless appeal. Quality Craftsmanship We believe
          that a great t-shirt starts with the finest materials and impeccable
          craftsmanship. That's why we meticulously source the softest fabrics
          and work with skilled artisans to ensure that every stitch is perfect.
          Our commitment to quality means that our t-shirts are not only
          comfortable to wear but also built to last.
        </p>
        <div className="social socialIcon d-flex justify-content-evenly">
          <a href="https://www.facebook.com/profile.php?id=100085231024026&mibextid=ZbWKwL">
            <FaFacebook style={{ color: "white" }}></FaFacebook>
          </a>
          <a href="https://instagram.com/fox.demando?igshid=OGQ5ZDc2ODk2ZA==">
            <FaInstagram style={{ color: "white" }}></FaInstagram>
          </a>
          <a href="">
            <FaTiktok style={{ color: "white" }}></FaTiktok>
          </a>
          <a href="">
            <FaTwitter style={{ color: "white" }}></FaTwitter>
          </a>
        </div>
      </Card>
    </>
  );
};

export default HomeScreen;
