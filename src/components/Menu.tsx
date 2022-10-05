import { NavLink } from "react-router-dom";
import { routes } from "../routes";

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={route.path}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
