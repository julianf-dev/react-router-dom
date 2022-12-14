import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";

export const BlogLink: React.FC<{post: blogData}> = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};