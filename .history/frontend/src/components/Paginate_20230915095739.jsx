import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ page, pages, isAdmin = fales }) => {
  return pages > 1 && <Pagination>{[...Array(pages).key().map(x) => (
    <LinkContainer key={x+1} to={!isAdmin}
  )]}</Pagination>;
};

export default Paginate;
