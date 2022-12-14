import { useRoutes } from "react-router-dom";
import { BlogPost } from "../components/BlogPost";
import { BlogPage } from "../components/BlogPage";
import { Home } from "../components/Home";
import { ProfilePage } from "../components/ProfilePage";
import { Routes } from "./Routes";

export const Router = () => {

  const elements = useRoutes([
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "blog",
      element: <BlogPage />,
      children: [
        {
          path: ":slug",
          element: <BlogPost />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ]
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "*",
      element: <p>don't exist elements</p>,
    },
    // En este caso la ruta dinámica se almacena en "slug" 
   /*  {
      path:"/blog/:slug",
      element: <BlogPost/>
    }, */
  ]);

  return elements;
};
