import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <h5 className="logo">
          Food<span>It</span>
        </h5>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <button
              className="button"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
