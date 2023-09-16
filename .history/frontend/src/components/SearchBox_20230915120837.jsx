import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
      <label>
        <input type="text" required></input>
        <ul>
          <li s>s</li>
          <li e>e</li>
          <li a>a</li>
          <li r>r</li>
          <li c>c</li>
          <li h>h</li>
        </ul>
      </label>
    </div>
  );
};

export default SearchBox;
