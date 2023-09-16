import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ page, pages, isAdmin = fales }) => {
  return pages > 1 && <Pagination>{[...Array(pages)]}</Pagination>;
};

export default Paginate;
