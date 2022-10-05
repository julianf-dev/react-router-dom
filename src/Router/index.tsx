import { HashRouter } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Routes } from "./Routes";


export const Router = () => {
  return (
    <>
      <HashRouter>
        <Menu/>
        <Routes/>
      </HashRouter>
    </>
  );
};
