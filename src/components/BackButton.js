import * as React from "react";
import { Link } from "react-router-dom";

const BackButton = () => (
  <Link to="/">
    <button className="btn btn-danger">Back</button>
  </Link>
);

export default BackButton;
