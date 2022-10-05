import { HashRouter, Route, useRoutes , } from "react-router-dom";
import { routes } from "./";
import { Menu } from "../components/Menu";


const Routes = () => {

  const elements = useRoutes(routes)

  return elements;
}

export const Router = () => {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes/>
      </HashRouter>
    </>
  );
};
