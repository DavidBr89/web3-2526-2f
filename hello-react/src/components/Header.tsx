import type React from "react";

const logoURL = "https://hogent.be";

const Header = () => {
  return (
    <>
      <div>
        <p>Test</p>
      </div>
      <div className="header">
        <img src={logoURL} alt="" />
        Header
      </div>
    </>
  );
};

export default Header;
