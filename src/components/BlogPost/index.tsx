import { useNavigate, useParams } from "react-router-dom";
import { data } from "../BlogLink/blogData";

export const BlogPost = () => {
  
  const navigate = useNavigate();
  const { slug } = useParams();
  const post = data.find(post => post.slug === slug)
  
  const returnToBlog = () =>{
    //basado en el array se devuevlve a la posicion anterior.
    //navigate(-1)
    navigate('/blog')
  };

  return (  
    <>
        <h1>{post?.title}</h1>
        <button onClick={returnToBlog}>volver al blog</button>
        <h2>{post?.author}</h2>
        <p>{post?.content}</p>
    </>
  )
};
