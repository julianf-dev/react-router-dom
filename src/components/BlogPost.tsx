import { useParams } from "react-router-dom";
import { data } from "./blogData";

export const BlogPost = () => {
  const { slug } = useParams();
  const post = data.find(post => post.slug === slug)
  return (  
    <>
        <h1>{post?.title}</h1>
        <h2>{post?.author}</h2>
        <p>{post?.content}</p>
    </>
  )
};
