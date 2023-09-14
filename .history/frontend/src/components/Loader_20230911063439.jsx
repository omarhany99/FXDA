import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
      aria-label="Orange and tan hamster running in a metal wheel"
      // role="img"
      className="wheel-and-hamster"
    >
      <div className="wheel"></div>
      <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb--fr"></div>
          <div className="hamster__limb hamster__limb--fl"></div>
          <div className="hamster__limb hamster__limb--br"></div>
          <div className="hamster__limb hamster__limb--bl"></div>
          <div className="hamster__tail"></div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>
    // <div data-js="astro" class="astronaut">
    //   <div class="head"></div>
    //   <div class="arm arm-left"></div>
    //   <div class="arm arm-right"></div>
    //   <div class="body">
    //     <div class="panel"></div>
    //   </div>
    //   <div class="leg leg-left"></div>
    //   <div class="leg leg-right"></div>
    //   <div class="schoolbag"></div>
    // </div>
  );
};

export default Loader;
