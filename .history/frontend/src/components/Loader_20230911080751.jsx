import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div class="loader-wrapper">
      <div class="packman"></div>
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
