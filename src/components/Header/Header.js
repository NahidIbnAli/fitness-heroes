import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <a
        href="/home"
        className="d-flex align-items-center justify-content-center gap-2 text-decoration-none"
      >
        <FontAwesomeIcon
          icon={faDumbbell}
          className="text-warning fs-10"
        ></FontAwesomeIcon>
        <h3 className="text-dark m-0 fs-2 fw-bold">Fitness Heroes</h3>
      </a>
    </nav>
  );
};

export default Header;
