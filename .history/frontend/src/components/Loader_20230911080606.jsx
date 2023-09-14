import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div class="loader JS_on">
      <span class="binary"></span>
      <span class="binary"></span>
      <span class="getting-there">LOADING STUFF...</span>
    </div>
  );
};

export default Loader;
