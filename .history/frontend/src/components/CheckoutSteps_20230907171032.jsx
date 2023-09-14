import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="navcs">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link data-text="Awesome" className="button">
              <span className="actual-text">&nbsp;SignIn&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;SignIn&nbsp;
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;SignIn&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;SignIn&nbsp;
            </span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link data-text="Awesome" className="button2">
              <span className="actual-text">&nbsp;Shipping&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;Shipping&nbsp;
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled data-text="Awesome" className="button2">
            <span className="actual-text">&nbsp;Shipping&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;Shipping&nbsp;
            </span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link data-text="Awesome" className="button3">
              <span className="actual-text">&nbsp;Payment&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;Payment&nbsp;
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled data-text="Awesome" className="button3">
            <span className="actual-text">&nbsp;Payment&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;Payment&nbsp;
            </span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link data-text="Awesome" className="button4">
              <span className="actual-text">&nbsp;PlaceOrder&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;PlaceOrder&nbsp;
              </span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled data-text="Awesome" className="button4">
            <span className="actual-text">&nbsp;PlaceOrder&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;PlaceOrder&nbsp;
            </span>
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
