import React from "react";

const NavbarLink = ({ href, children }) => {
  return (
    <div className="navbar-link">
      <a href={href}>
        <p>{children}</p>
      </a>
    </div>
  );
};

export default NavbarLink;
