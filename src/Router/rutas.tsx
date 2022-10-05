import { BlogPage } from "../components/BlogPage";
import { Home } from "../components/Home";
import { ProfilePage } from "../components/ProfilePage";

interface Routes {
  path: string;
  element?: JSX.Element;
  text: string;
}

export const rutas: Routes[] = [
  {
    path: "/",
    element: <Home />,
    text: "Home",
  },
  {
    path: "blog",
    element: <BlogPage />,
    text: "Blog",
  },
  {
    path: "profile",
    element: <ProfilePage />,
    text: "Profile",
  },
];
