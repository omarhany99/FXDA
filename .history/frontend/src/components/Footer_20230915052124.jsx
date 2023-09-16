import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Fox Demando &copy; {currentYear}</p>
          </Col>
        </Row>
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
      </Container>
    </footer>
  );
};

export default footer;
