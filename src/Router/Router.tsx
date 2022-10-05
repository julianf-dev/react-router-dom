import { useRoutes } from "react-router-dom";
import { BlogPost } from "../components/BlogPost";
import { Routes } from "./Routes";

export const Router = () => {

  const elements = useRoutes([
    ...Routes,
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
