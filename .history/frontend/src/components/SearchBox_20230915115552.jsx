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
      navigate(`/search`);
    }
  };
  return <div></div>;
};

export default SearchBox;
