import { BlogPage } from "../components/BlogPage";
import { Home } from "../components/Home";
import { ProfilePage } from "../components/ProfilePage";

interface Routes {
  path: string;
  element?: JSX.Element;
  text: string;
}

export const Routes: Routes[] = [
  {
    path: "home",
    text: "Home",
  },
  {
    path: "blog",
    text: "Blog",
  },
  {
    path: "profile",
    text: "Profile",
  },
  {
    path: "login",
    text: "Login",
  },
  {
    path: "logout",
    text: "Logout",
  },
];
