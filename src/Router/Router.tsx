import { useRoutes } from "react-router-dom";
import { BlogPost } from "../components/BlogPost";
import { Routes } from "./Routes";

export const Router = () => {

  const elements = useRoutes([
    ...Routes,
    // En este caso la ruta dinámica se almacena en "slug" 
    {
      path:"/blog/:slug",
      element: <BlogPost/>
    },
    {
      path: "*",
      element: <p>don't exist elements</p>,
    },

  ]);

  return elements;
};
