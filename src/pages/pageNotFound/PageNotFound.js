import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{margin: "5rem auto"}}>
      <h1>This Page Doesn't Exist</h1>
      <Link to="/" style={{textDecoration: "underline", fontSize: "25px", marginTop: "2rem"}}>Back to Home</Link>
    </div>
  )
};

export default PageNotFound;
