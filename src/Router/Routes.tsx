import { useRoutes } from "react-router-dom";
import { BlogPost } from "../components/BlogPost";
import { rutas } from "./rutas";

export const Routes = () => {

  const elements = useRoutes([
    ...rutas,
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
