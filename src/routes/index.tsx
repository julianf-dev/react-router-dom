import { Home } from "../components/Home";
import { BlogPage } from "../components/BlogPage";
import { ProfilePage } from "../components/ProfilePage";

interface Routes {
  path: string;
  element: JSX.Element;
  text?: string;
};

export const routes: Routes[] = [
    {
      path: "/",
      element: <Home />,
      text: "home",
    },
    {
      path: "/blog",
      element: <BlogPage />,
      text: "blog",
    },
    {
      path: "/profile",
      element: <ProfilePage />,
      text: "profile",
    },
    
  ];

