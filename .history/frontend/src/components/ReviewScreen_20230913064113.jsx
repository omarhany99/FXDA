import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="product">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="card-img" src={product.image} variant="top" />
      </Link>
      <Card.Body className="product-rating">
        <Link to={`/product/${product._id}`}>
          <Card.Title className="product-title" as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text className="price" as="h3">
          {product.price} LE
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
