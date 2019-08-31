import React, { Fragment } from "react";
import "./BlogPlaceholder.scss";
import TeaLogo from "./TeaLogo";

const BlogPlaceholder = () => {
  return (
    <Fragment>
      <div className="blog-section">
        <TeaLogo />
        <p className="blog-section-text">
          Have some tea, take a break, this page is still in construction
        </p>
      </div>
    </Fragment>
  );
};
export default BlogPlaceholder;
