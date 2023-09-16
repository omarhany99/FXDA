import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sb.css";

const SearchBox = () => {
  const navigate = useNavigate();
  const [urlKeyword, setUrlKeyword] = useParams();
  const [keyword, setKeyword] = useState(urlKeyword);

  const submitHandler = (e) => {
    e.prevent.Defualt();

    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div>
      {" "}
      <div class="input-group">
        <input
          placeholder="Enter new item here"
          type="text"
          id="input-field"
        ></input>
        <button class="submit-button">
          <span>ADD</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
