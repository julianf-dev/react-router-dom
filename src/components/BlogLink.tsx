import React from "react";
import { Link } from "react-router-dom";

export const BlogLink: React.FC<{post:any}> = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};



