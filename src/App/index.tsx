import { HashRouter } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Router } from "../Router/Router";


export const App = () => {
  return (
    <>
      <HashRouter>
        <Menu/>
        <Router/>
      </HashRouter>
    </>
  );
};