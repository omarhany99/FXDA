import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./pg.css";

const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    pages > 1 && (
      <Pagination className="pg">
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={!isAdmin ? keyword? `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
