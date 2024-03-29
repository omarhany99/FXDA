import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ page, pages, isAdmin = false }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).key()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={!isAdmin ? `page/${x + 1}` : `/admin/productlist/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
