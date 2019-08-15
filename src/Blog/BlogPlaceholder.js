import React, { Fragment } from "react";
import "./BlogPlaceholder.scss";

const BlogPlaceholder = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="placeholder-logo" />
        <p className="placeholder-text">
          Have some tea, take a break, this page is still in construction
        </p>
      </div>
    </Fragment>
  );
};
export default BlogPlaceholder;
