import { Container, Row, Col } from "react-bootstrap";
import "../screens/LoginScreen.css";
const FormContainer = ({ children }) => {
  return (
    <div>
      {/* <label className="switch">
        <input type="checkbox" className="toggle"></input>
        <span className="slider"></span>
        <span className="card-side"></span>
      </label> */}
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FormContainer;
