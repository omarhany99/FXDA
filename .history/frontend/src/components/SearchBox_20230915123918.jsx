import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sb.css";
const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* <Form onSubmit={submitHandler} class="inputsr-group">
        <Form.Control
          type="text"
          name="q"
          id="inputsr-field"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button
          class="submit-button"
          type="submit"
          variant="outline-success"
          className="p-2 mx-2"
        >
          Search
        </Button>
      </Form> */}

      <div onSubmit={submitHandler} className="d-flex" class="inputsr-group">
        <input
          type="text"
          name="q"
          id="inputsr-field"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Search Products..."
        ></input>
        <Button type="submit" class="submit-button">
          <span>Search</span>
        </Button>
      </div>
    </>
  );
};

export default SearchBox;

// import { Form, Button } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const SearchBox = () => {
//   const navigate = useNavigate();
//   const { keyword: urlKeyword } = useParams();
//   const [keyword, setKeyword] = useState(urlKeyword);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword) {
//       navigate(`/search/${keyword.trim()}`);
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//
//   );
// };

// export default SearchBox;
